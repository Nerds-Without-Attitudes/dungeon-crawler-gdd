# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Tooling

Make sure you've got NodeJS and a text editor installed. 

First, get NodeJS in [the official website](https://nodejs.org/en/download/prebuilt-installer).

Second, choose a text editor, we recommend [VSCode](https://code.visualstudio.com/).

Finally, open the cloned project folder in VSCode and follow the next steps in the terminal.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

# Manage Docs Versions

Docusaurus can manage multiple versions of your docs.

## Create a docs version

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**
