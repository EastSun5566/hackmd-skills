#!/usr/bin/env node

// Get API token from environment
const API_TOKEN = process.env.HACKMD_API_TOKEN;

if (!API_TOKEN) {
  console.error('Error: HACKMD_API_TOKEN environment variable is not set.');
  console.error('');
  console.error('Get your API token from: https://hackmd.io/settings#api');
  console.error('Then set it with: export HACKMD_API_TOKEN=your_token_here');
  process.exit(1);
}

// HackMD API Base URL
const API_BASE_URL = 'https://api.hackmd.io/v1';

// Helper function to make API requests
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
    ...options.headers
  };

  const response = await fetch(url, {
    ...options,
    headers
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API request failed: ${response.status} ${response.statusText}\n${error}`);
  }

  return response.json();
}

// Parse command line arguments
const command = process.argv[2];
const args = process.argv.slice(3);

/**
 * List notes
 */
async function listNotes(options) {
  try {
    const notes = await apiRequest('/notes');

    const limit = options.limit || 10;
    const displayNotes = notes.slice(0, limit);

    console.log(`\nShowing ${displayNotes.length} of ${notes.length} notes:\n`);

    displayNotes.forEach((note, index) => {
      console.log(`${index + 1}. ${note.title || '(Untitled)'}`);
      console.log(`   ID: ${note.id}`);
      console.log(`   URL: https://hackmd.io/${note.id}`);
      console.log(`   Updated: ${new Date(note.lastChangedAt).toLocaleString()}`);
      console.log('');
    });

  } catch (error) {
    console.error('Error fetching notes:', error.message);
    process.exit(1);
  }
}

/**
 * Create a new note
 */
async function createNote(options) {
  try {
    if (!options.title || !options.content) {
      console.error('Error: --title and --content are required');
      process.exit(1);
    }

    const noteData = {
      title: options.title,
      content: options.content,
    };

    if (options.readPermission) {
      noteData.readPermission = options.readPermission;
    }

    if (options.writePermission) {
      noteData.writePermission = options.writePermission;
    }

    const response = await apiRequest('/notes', {
      method: 'POST',
      body: JSON.stringify(noteData)
    });

    console.log('\n✓ Note created successfully!');
    console.log(`  Title: ${options.title}`);
    console.log(`  ID: ${response.id}`);
    console.log(`  URL: https://hackmd.io/${response.id}`);
    console.log('');

  } catch (error) {
    console.error('Error creating note:', error.message);
    process.exit(1);
  }
}

/**
 * Get note content
 */
async function getNote(noteId) {
  try {
    if (!noteId) {
      console.error('Error: note ID is required');
      process.exit(1);
    }

    const response = await apiRequest(`/notes/${noteId}`);

    console.log('\n' + '='.repeat(60));
    console.log(`Title: ${response.title || '(Untitled)'}`);
    console.log(`ID: ${response.id}`);
    console.log(`URL: https://hackmd.io/${response.id}`);
    console.log(`Created: ${new Date(response.createdAt).toLocaleString()}`);
    console.log(`Updated: ${new Date(response.lastChangedAt).toLocaleString()}`);
    console.log('='.repeat(60));
    console.log('\nContent:\n');
    console.log(response.content);
    console.log('');

  } catch (error) {
    console.error('Error fetching note:', error.message);
    process.exit(1);
  }
}

/**
 * Update note content
 */
async function updateNote(noteId, options) {
  try {
    if (!noteId || !options.content) {
      console.error('Error: note ID and --content are required');
      process.exit(1);
    }
    
    const updateData = {
      content: options.content,
    };
    
    if (options.readPermission) {
      updateData.readPermission = options.readPermission;
    }
    
    if (options.writePermission) {
      updateData.writePermission = options.writePermission;
    }
    
    await apiRequest(`/notes/${noteId}`, {
      method: 'PATCH',
      body: JSON.stringify(updateData)
    });
    
    console.log('\n✓ Note updated successfully!');
    console.log(`  ID: ${noteId}`);
    console.log(`  URL: https://hackmd.io/${noteId}`);
    console.log('');
    
  } catch (error) {
    console.error('Error updating note:', error.message);
    process.exit(1);
  }
}

/**
 * Delete a note
 */
async function deleteNote(noteId) {
  try {
    if (!noteId) {
      console.error('Error: note ID is required');
      process.exit(1);
    }
    
    await apiRequest(`/notes/${noteId}`, {
      method: 'DELETE'
    });
    
    console.log('\n✓ Note deleted successfully!');
    console.log(`  ID: ${noteId}`);
    console.log('');
    
  } catch (error) {
    console.error('Error deleting note:', error.message);
    process.exit(1);
  }
}

/**
 * Parse options from arguments
 */
function parseOptions(args) {
  const options = {};
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const value = args[i + 1];
      
      if (value && !value.startsWith('--')) {
        options[key] = value;
        i++; // Skip next arg as it's the value
      }
    }
  }
  
  // Convert numeric limit
  if (options.limit) {
    options.limit = parseInt(options.limit, 10);
  }
  
  return options;
}

/**
 * Show help message
 */
function showHelp() {
  console.log(`
HackMD CLI - Interact with HackMD API

Usage:
  hackmd-cli <command> [options]

Commands:
  list-notes              List your HackMD notes
    --limit <number>      Number of notes to show (default: 10)

  create-note             Create a new note
    --title <string>      Note title (required)
    --content <string>    Note content (required)
    --read-permission     Read permission: owner, signed_in, guest
    --write-permission    Write permission: owner, signed_in, guest

  get-note <id>           Get note content

  update-note <id>        Update a note
    --content <string>    New content (required)
    --read-permission     Update read permission
    --write-permission    Update write permission

  delete-note <id>        Delete a note

Environment Variables:
  HACKMD_API_TOKEN        Your HackMD API token (required)
                          Get one from: https://hackmd.io/settings#api

Examples:
  hackmd-cli list-notes --limit 5
  hackmd-cli create-note --title "My Note" --content "# Hello World"
  hackmd-cli get-note abc123
  hackmd-cli update-note abc123 --content "# Updated Content"
  hackmd-cli delete-note abc123
`);
}

// Main command router
async function main() {
  if (!command || command === 'help' || command === '--help' || command === '-h') {
    showHelp();
    return;
  }
  
  const options = parseOptions(args);
  
  switch (command) {
    case 'list-notes':
      await listNotes(options);
      break;
      
    case 'create-note':
      await createNote(options);
      break;
      
    case 'get-note':
      await getNote(args[0]);
      break;
      
    case 'update-note':
      await updateNote(args[0], options);
      break;
      
    case 'delete-note':
      await deleteNote(args[0]);
      break;
      
    default:
      console.error(`Unknown command: ${command}`);
      console.error('Run "hackmd-cli help" for usage information');
      process.exit(1);
  }
}

main().catch((error) => {
  console.error('Unexpected error:', error);
  process.exit(1);
});
