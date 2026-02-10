<h1 align="center">
  <br>
  n8n-nodes-jobsuche
  <br>
</h1>

<p align="center">
	<img alt="NPM Version" src="https://img.shields.io/npm/v/n8n-nodes-jobsuche">
	<img alt="GitHub License" src="https://img.shields.io/github/license/hans/n8n-nodes-jobsuche">
	<img alt="NPM Downloads" src="https://img.shields.io/npm/dm/n8n-nodes-jobsuche">
	<img alt="NPM Last Update" src="https://img.shields.io/npm/last-update/n8n-nodes-jobsuche">
	<img alt="Static Badge" src="https://img.shields.io/badge/n8n-2.18.7-EA4B71?logo=n8n">
</p>

<p align="center">
  <a href="#installation">Installation</a> |
  <a href="#credentials">Credentials</a> |
  <a href="#resources">Resources</a> |
  <a href="#development">Development</a> |
  <a href="#license">License</a>
</p>

---

n8n community node for the [Arbeitsagentur Jobsuche](https://jobsuche.api.bund.dev) API -- search the largest job database in Germany.

## Installation

1. Create a new workflow or open an existing one
2. Open the nodes panel by selecting **+** or pressing **N**
3. Search for **Jobsuche**
4. Select **Install** to install the node for your instance

## Credentials

**Create new credentials** in n8n by selecting Jobsuche API and use the default key: `jobboerse-jobsuche`

## Resources

<details>
<summary><strong>Job</strong></summary>

| Operation | Description |
| --------- | ----------- |
| Get | Get details of a specific job listing by its reference number |
| Search | Search available job offers with various filters |

</details>

## Development

```bash
git clone https://github.com/hans/n8n-nodes-jobsuche.git
cd n8n-nodes-jobsuche
bun install
bun run build
bun run lint
```

## License

[MIT](LICENSE.md)

<p align="center">
  <a href="https://github.com/hans/n8n-nodes-jobsuche">GitHub</a> |
  <a href="https://github.com/hans/n8n-nodes-jobsuche/issues">Issues</a> |
  <a href="https://jobsuche.api.bund.dev">Arbeitsagentur Jobsuche Docs</a>
</p>
