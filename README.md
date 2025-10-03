# React TypeScript Project

A React application Showing the issue with `property.destructAll` 
 that does not work properly after replacing all occurrences with `.destructAll`.

## Prerequisites

- Node.js (LTS version)
- Yarn package manager

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn
   ```
3. Start development server:
   ```bash
   yarn dev
   ```
4. Build for production:
   ```bash
   yarn build
   ```
5. Preview production build:
   ```bash
   yarn preview
   ```
## Steps to reproduce

1. Go to `/src/App.tsx` file
2. Inside the ListItem function write props.destructAll
3. Webstorm shows the option to destruct only this occurrence or all founded occurrences
4. Select ALl occurrences (in this case 3)
5. Webstorm will not replace all occurrences instead of keeps `_tmp_webstorm_`
