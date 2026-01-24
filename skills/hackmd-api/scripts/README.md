# HackMD API CLI Tool

Command-line interface for interacting with the HackMD API.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set API Token

Get your API token from: https://hackmd.io/settings#api

```bash
export HACKMD_API_TOKEN=your_token_here
```

Add to `~/.bashrc` or `~/.zshrc` for persistence:

```bash
echo 'export HACKMD_API_TOKEN=your_token_here' >> ~/.zshrc
source ~/.zshrc
```

### 3. Test the CLI

```bash
node hackmd-cli.mjs list-notes
```

## Commands

### List Notes

```bash
node hackmd-cli.mjs list-notes [--limit <number>]
```

### Create Note

```bash
node hackmd-cli.mjs create-note \
  --title "My Note" \
  --content "# Hello World" \
  --read-permission owner \
  --write-permission owner
```

### Get Note

```bash
node hackmd-cli.mjs get-note <note-id>
```

### Update Note

```bash
node hackmd-cli.mjs update-note <note-id> \
  --content "# Updated Content"
```

### Delete Note

```bash
node hackmd-cli.mjs delete-note <note-id>
```

## Permissions

Available permission levels:

- `owner` - Only you (default)
- `signed_in` - All signed-in users
- `guest` - Anyone with the link

## Examples

### Create from File

```bash
node hackmd-cli.mjs create-note \
  --title "Documentation" \
  --content "$(cat README.md)"
```

### Batch List with Limit

```bash
node hackmd-cli.mjs list-notes --limit 20
```

## Troubleshooting

**"HACKMD_API_TOKEN not set"**

- Run: `export HACKMD_API_TOKEN=your_token_here`

**"Cannot find module '@hackmd/api'"**

- Run: `npm install`

**"Permission denied"**

- Check your API token is valid
- Visit: https://hackmd.io/settings#api

## Documentation

See [../references/API_REFERENCE.md](../references/API_REFERENCE.md) for complete API documentation.
