---
pagination_next: null
---

# Extract subjects from IIUM websites

The steps are simple.
- Open i-ma'luum or prereg in **desktop** browser.
- Open **Developer Tools**.
- Run scrapper **script**.
- **Scan/copy** the JSON output.
- Paste into the app.

Click the cards below to follow the detailed steps:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```