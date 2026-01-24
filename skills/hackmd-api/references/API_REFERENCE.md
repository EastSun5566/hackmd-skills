# HackMD API Reference

This document provides detailed information about the HackMD API integration in this skill.

## API Endpoints

The skill uses the official HackMD V1 API. For complete documentation, see: https://hackmd.io/@hackmd-api/developer-portal

### Supported Operations

| Operation                 | Endpoint            | Description             |
| ------------------------- | ------------------- | ----------------------- |
| `getHistory()`            | `GET /history`      | Get user's note history |
| `createNote(options)`     | `POST /notes`       | Create a new note       |
| `getNote(id)`             | `GET /notes/:id`    | Get note content        |
| `updateNote(id, options)` | `PATCH /notes/:id`  | Update note content     |
| `deleteNote(id)`          | `DELETE /notes/:id` | Delete a note           |

## Authentication

All API requests require authentication using an API token.

### Getting an API Token

1. Log in to HackMD
2. Go to Settings: https://hackmd.io/settings#api
3. Generate a new API token
4. Set the token as an environment variable:

```bash
export HACKMD_API_TOKEN=your_token_here
```

### Token Security

- **Never** commit tokens to version control
- Store tokens in environment variables or secure vaults
- Rotate tokens periodically
- Revoke unused tokens immediately

## Note Permissions

HackMD supports three permission levels for notes:

| Permission  | Description                     |
| ----------- | ------------------------------- |
| `owner`     | Only you can access (default)   |
| `signed_in` | All signed-in users can access  |
| `guest`     | Anyone with the link can access |

Permissions can be set independently for read and write access.

## API Client

This skill uses the official [@hackmd/api](https://github.com/hackmdio/api-client/tree/develop/nodejs) Node.js client.

### Installation

```bash
cd skills/hackmd-api/scripts
npm install
```

### Direct Usage

If you want to use the client directly in your own scripts:

```javascript
import { HackMD } from "@hackmd/api";

const hackmd = new HackMD(process.env.HACKMD_API_TOKEN);

// Create a note
const note = await hackmd.createNote({
  title: "My Note",
  content: "# Hello World",
  readPermission: "signed_in",
});

console.log(`Note URL: https://hackmd.io/${note.id}`);
```

## Response Formats

### Note Object

```typescript
interface Note {
  id: string; // Note ID (e.g., "abc123")
  title: string; // Note title
  content: string; // Note content in Markdown
  createdAt: string; // ISO 8601 timestamp
  lastChangedAt: string; // ISO 8601 timestamp
  readPermission: string; // 'owner', 'signed_in', or 'guest'
  writePermission: string; // 'owner', 'signed_in', or 'guest'
}
```

### History Object

```typescript
interface History {
  history: Array<{
    id: string;
    title: string;
    lastChangedAt: string;
  }>;
}
```

## Rate Limits

The HackMD API has rate limits to prevent abuse:

- **Rate limit**: Varies by account type
- **Recommended**: Add delays between bulk operations
- **Error handling**: Implement exponential backoff for 429 errors

## Error Handling

Common error codes:

| Status | Meaning           | Solution                       |
| ------ | ----------------- | ------------------------------ |
| 401    | Unauthorized      | Check API token is valid       |
| 403    | Forbidden         | Verify permissions on the note |
| 404    | Not Found         | Note ID doesn't exist          |
| 429    | Too Many Requests | Implement rate limiting        |
| 500    | Server Error      | Retry with exponential backoff |

## Best Practices

### Content Creation

1. **Use HackMD Flavored Markdown**: Combine with the `hackmd` skill for proper syntax
2. **Set Appropriate Permissions**: Default to `owner` for sensitive content
3. **Add Metadata**: Include clear titles for better organization
4. **Validate Content**: Check Markdown syntax before uploading

### Performance

1. **Batch Operations**: Minimize API calls by batching when possible
2. **Cache Responses**: Cache note lists to reduce repeated calls
3. **Use Incremental Updates**: Only update changed content

### Security

1. **Token Management**: Rotate tokens regularly
2. **Permission Control**: Use least-privilege principle
3. **Audit Logs**: Monitor API usage through HackMD settings
4. **Content Validation**: Sanitize user input before creating notes

## Examples

### Example 1: Bulk Create Notes

```javascript
import { HackMD } from "@hackmd/api";

const hackmd = new HackMD(process.env.HACKMD_API_TOKEN);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function bulkCreateNotes(notes) {
  for (const noteData of notes) {
    try {
      const note = await hackmd.createNote(noteData);
      console.log(`Created: ${note.id}`);

      // Rate limiting: wait 1 second between requests
      await delay(1000);
    } catch (error) {
      console.error(`Failed to create "${noteData.title}":`, error.message);
    }
  }
}

const notesToCreate = [
  { title: "Note 1", content: "# First Note" },
  { title: "Note 2", content: "# Second Note" },
];

await bulkCreateNotes(notesToCreate);
```

### Example 2: Sync from File

```javascript
import { HackMD } from "@hackmd/api";
import { readFileSync } from "node:fs";

const hackmd = new HackMD(process.env.HACKMD_API_TOKEN);

async function syncFileToHackMD(filePath, noteId = null) {
  const content = readFileSync(filePath, "utf-8");
  const title = filePath.split("/").pop().replace(".md", "");

  if (noteId) {
    // Update existing note
    await hackmd.updateNote(noteId, { content });
    console.log(`Updated: https://hackmd.io/${noteId}`);
  } else {
    // Create new note
    const note = await hackmd.createNote({ title, content });
    console.log(`Created: https://hackmd.io/${note.id}`);
  }
}

await syncFileToHackMD("./docs/README.md");
```

## Troubleshooting

### Module Not Found

```bash
cd skills/hackmd-api/scripts
npm install
```

### API Token Not Set

```bash
export HACKMD_API_TOKEN=your_token_here
# Or add to ~/.bashrc or ~/.zshrc for persistence
```

### Permission Denied

- Verify the API token has the necessary permissions
- Check if the note exists and you're the owner
- Try accessing the note manually in HackMD

## Additional Resources

- [HackMD API Documentation](https://hackmd.io/@hackmd-api/developer-portal)
- [Official Node.js Client](https://github.com/hackmdio/api-client/tree/develop/nodejs)
- [HackMD Feature Reference](https://hackmd.io/s/features)
