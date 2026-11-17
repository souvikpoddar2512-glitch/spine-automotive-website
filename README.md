# Spine Automotive Private Limited - Corporate Website

Official corporate website for **Spine Automotive Private Limited** (CIN: `U29201JH2025PTC023861`), incorporated in January 2025.

- **Location**: NS-39, Phase-1, Adityapur Industrial Area, Seraikela-Kharsawan, Jharkhand – 831013, India
- **Industry**: Manufacture of motor vehicles, trailers and semi-trailers
- **Official Contact**: [spineautomotive2025@gmail.com](mailto:spineautomotive2025@gmail.com) | +91 7870915591

---

## Architecture & Technology Stack
- **100% Free Static Architecture**: Pure standards-compliant HTML5, Modern CSS3, and Vanilla JavaScript.
- **Zero Build Pipelines**: No npm, node_modules, bundlers, or paid cloud databases required. Works straight out of the box in any browser.
- **Form Handling**: Free tier Web3Forms (emails quote submissions directly to your inbox).
- **Design & Typography**: High-contrast industrial OEM palette with light/dark theme toggle, Google Fonts (`Outfit` & `Inter`), and inline crisp SVG vector schematics.
- **SEO & Compliance**: Open Graph meta tags, JSON-LD Schema (`LocalBusiness` / `AutomotiveBusiness`), `sitemap.xml`, `robots.txt`, and separate `privacy.html`.

---

## Free Hosting & Deployment Guide (100% Zero Cost Forever)

Choose whichever free hosting provider you prefer. All three provide global CDN speed, free SSL certificates (HTTPS), and zero hosting fees.

### Option A: GitHub Pages (Recommended)

#### Step 1: Create a GitHub Account & Repository
1. Log in to [GitHub](https://github.com/) (create a free account if you don't have one).
2. Click the **+** icon in the top right &rarr; **New repository**.
3. Name your repository (e.g., `spine-automotive` or `spine-website`).
4. Set visibility to **Public** and leave all checkboxes (README, .gitignore) unchecked.
5. Click **Create repository**.

#### Step 2: Push Your Website Code
Open a terminal (PowerShell or Git Bash) in this project folder:
```bash
# Initialize git repository
git init

# Add all project files
git add .

# Create initial commit
git commit -m "Initial launch: Spine Automotive website"

# Rename branch to main
git branch -M main

# Link to your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/spine-automotive.git

# Push the code
git push -u origin main
```
*(Alternatively, you can drag and drop the folder contents directly into the GitHub web interface by clicking "Upload files".)*

#### Step 3: Enable Free GitHub Pages Hosting
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) &rarr; **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (our included `.github/workflows/deploy.yml` will automatically build and publish).
   - *Or*, select **Deploy from a branch**, choose `main` branch, and root folder `/`, then click **Save**.
4. Within 1–2 minutes, your website is live at:
   `https://<your-username>.github.io/spine-automotive/`

---

### Option B: Cloudflare Pages (Instant Zero-Config)

1. Sign up for free at [Cloudflare](https://pages.cloudflare.com/).
2. Navigate to **Workers & Pages** &rarr; **Create application** &rarr; **Pages**.
3. Choose either:
   - **Connect to Git**: Link your GitHub repository. (Cloudflare automatically redeploys whenever you commit changes).
   - **Direct Upload**: Simply drag and drop this entire project folder into Cloudflare.
4. Framework preset: Select **None** (Static HTML).
5. Click **Deploy Site**.
6. Your website is instantly live with enterprise-grade CDN speed at:
   `https://spine-automotive.pages.dev/`

---

### Option C: Netlify (Free Tier)

1. Sign up for free at [Netlify](https://www.netlify.com/).
2. Drag and drop the `Spine Automotive Website` folder into the Netlify "Sites" dashboard.
3. Your website goes live immediately at `https://<random-name>.netlify.app/`.
4. Go to **Site Configuration** &rarr; **Change site name** to choose `https://spine-automotive.netlify.app`.

---

## Connecting a Custom Domain (Optional, Zero Hosting Cost)

When you decide to purchase a custom domain (e.g. `spineautomotive.com` or `spineautomotive.in` from Namecheap, GoDaddy, or Cloudflare Registrar for ~₹600–900/year):

> **Important**: You never need to pay for web hosting. The domain registrar only charges for the name itself; GitHub Pages and Cloudflare Pages host it completely free with free automatic SSL certificates.

### If using GitHub Pages:
1. Go to your repository &rarr; **Settings** &rarr; **Pages** &rarr; **Custom domain**.
2. Type `spineautomotive.com` and click **Save**.
3. In your domain registrar's DNS management dashboard, add these records:
   - **CNAME Record**: Name: `www` &bull; Target: `<your-username>.github.io`
   - **A Records** (for apex domain `spineautomotive.com`):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
4. Check the box for **Enforce HTTPS** in GitHub Pages settings.

### If using Cloudflare Pages:
1. In Cloudflare Pages dashboard, click your project &rarr; **Custom domains** &rarr; **Set up a custom domain**.
2. Type `spineautomotive.com`. If your domain uses Cloudflare DNS, it automatically configures all CNAME and SSL settings with 1 click.

---

## Local Development & Testing

To test the website locally on your computer:
1. Simply double-click `index.html` to open it in Google Chrome, Microsoft Edge, or Mozilla Firefox.
2. Or use any local static server:
   ```powershell
   # Using Python (built-in on Windows/Mac/Linux):
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000` in your web browser.

---

## Customizing Placeholders
Refer to the complete checklist in [PLACEHOLDERS.md](PLACEHOLDERS.md) for instructions on setting up your free Web3Forms contact key, swapping CAD schematics for real plant photos, updating ISO certification numbers, and configuring Google Maps.
