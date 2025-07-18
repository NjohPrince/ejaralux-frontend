## EJARAFLUX FRONTEND

Luxury Skin, Timeless Glow

### Local Setup Instructions

1. Clone this repository using the following command:

```bash
git clone https://github.com/NjohPrince/ejaralux-frontend.git
```

2. Open cloned project folder on your code editor and install the project dependencies by running:

```bash
npm install
```

3. Create a `.env.local` file and paste the content from `env.example` file located at the root of the project folder.

4. Start the debvelopment server as follows:

```bash
npm run dev
```

- Demo Link: [Access here](https://ejaralux.vercel.app)

### Folder and Files Structure (Application Tree)

    .
    ├── .next
    ├── app
    │   ├── auth
    │   │   ├── change-password
    │   │   ├── forgot-password
    │   │   ├── login
    │   │   └── register
    │   ├── cart
    │   ├── dashboard
    │   └── products
    │       ├── [category]
    │           └── [slug]
    ├── modules
    │   ├── [module/feature]
    │   │   ├── components
    │   │   │   ├── atoms
    │   │   │   ├── molecules
    │   │   │   ├── organisms
    │   │   │   └── templates
    │   │   ├── lib
    │   │   │   ├── hooks
    │   │   │   ├── utils
    │   │   │   └── validations
    │   │   ├── services
    │   │   └── types
    ├── node_modules
    ├── public
    ├── redux
    ├── shared
    │   ├── components
    │   │   ├── atoms
    │   │   ├── molecules
    │   │   ├── organisms
    │   │   └── templates
    │   ├── lib
    │   │   ├── hooks
    │   │   ├── utils
    │   │   └── validations
    │   ├── services
    │   └── types
    .

### Project Architecture

- Project architecture explained here: [Click Me](https://github.com/NjohPrince/ejaralux-frontend/blob/main/ARCHITECTURE.md)