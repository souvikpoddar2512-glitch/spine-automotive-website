# Spine Automotive - Client Asset & Placeholder Checklist

> [!NOTE]
> **Branding Update (Completed)**:
> - **Official Logo**: Configured with `assets/images/spine_automotive_logo_transparent.png` across header brand links, hero badges, footer wordmarks, and JSON-LD schema.
> - **Favicon**: Configured with `assets/images/spine_automotive_favicon_64x64.png`.

---

## 1. Contact Form Free Access Key (Web3Forms)
- **File**: `index.html` (approx. line 452)
- **Current Value**: `value="YOUR_WEB3FORMS_ACCESS_KEY_HERE"`
- **How to replace**:
  1. Go to [https://web3forms.com/](https://web3forms.com/) (100% free, no credit card needed).
  2. Enter your company email: `spineautomotive2025@gmail.com`.
  3. Click **Create Access Key**. You will receive an access key in your inbox.
  4. In `index.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your key:
     ```html
     <input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
     ```
  5. *Done!* Every time someone fills out the quote form, their full requirements will be emailed directly to `spineautomotive2025@gmail.com`.

---

## 2. Phone Number & WhatsApp
- **Current Verified Value**: `+91 7870915591` (and `7870915591`)
- **Files**:
  - `index.html` (Header WhatsApp link, Hero phone, Contact Section, Footer, JSON-LD Schema)
  - `privacy.html` (Section 6: Grievance Officer)
  - `assets/js/main.js` (Fallback contact strings)
- **Format**:
  - Phone link: `<a href="tel:+917870915591">+91 7870915591</a>`
  - WhatsApp link: `<a href="https://wa.me/917870915591?text=...">`
- *If your company phone or direct desk line changes in the future, search for `7870915591` across the files and update.*

---

## 3. Product & Facility Photography (Swapping Placeholders for Real Photos)
The website currently includes vector CAD engineering schematics (`assets/images/schematics/*.svg`), which look clean, technical, and engineering-grade. Once you take actual high-resolution photographs of your plant and trailers at Adityapur, you can replace them:

| Section | Current File | Recommended Real Photo | Target File & Line |
| :--- | :--- | :--- | :--- |
| **Hero Card** | `assets/images/schematics/semi-trailer.svg` | Hero shot of your flagship trailer on the road or outside the plant | `index.html` (Hero section) |
| **Product: Semi-Trailers** | `assets/images/schematics/semi-trailer.svg` | Multi-axle commercial trailer built in your bay | `index.html` (Products card 1) |
| **Product: Flatbed** | `assets/images/schematics/flatbed-trailer.svg` | 40ft container flatbed trailer with twistlocks | `index.html` (Products card 2) |
| **Product: Tipper** | `assets/images/schematics/tipper-trailer.svg` | Hydraulic dump tipper body in action | `index.html` (Products card 3) |
| **Product: Custom Chassis** | `assets/images/schematics/custom-chassis.svg` | Welded ladder frame chassis on the fixture bed | `index.html` (Products card 4) |
| **Facility Banner** | `assets/images/schematics/facility.svg` | Real photograph of your Adityapur shop floor / overhead crane / welding bays | `index.html` (Capabilities section) |

*Tip: For optimal website performance, save your photos in modern `.webp` format with width around 1200px to 1600px and compress using free tools like [squoosh.app](https://squoosh.app).*

---

## 4. Quality & Compliance Certifications (ISO / ARAI / ICAT)
- **File**: `index.html` (Quality section, line 380–430)
- **Current Status**:
  - Raw Material Standards: Marked as **Active Protocol** (IS 2062 / E350 & E450 Steel).
  - ISO 9001:2015: Marked as **Audit & Registration In Progress**.
  - AIS / CMVR: Marked as **Engineering Compliance**.
- **When You Receive Your ISO Certificate**:
  1. Open `index.html` in the Quality section.
  2. Change `<span class="quality-badge-status status-pending">Audit & Registration In Progress</span>` to `<span class="quality-badge-status status-active">Certified ISO 9001:2015</span>`.
  3. Add your Certification Number, Registrar Name, and Certificate validity period.

---

## 5. Google Maps Exact Location Link
- **File**: `index.html` (Contact section, approx line 515)
- **Current Value**: Embedded Google Map centered on Adityapur Industrial Area Phase-1.
- **How to update with your exact Google Business Profile pin**:
  1. Search your exact shop address or Google Business profile on [Google Maps](https://maps.google.com).
  2. Click **Share** &rarr; **Embed a map**.
  3. Copy the `src="..."` URL from the iframe code and paste it into the `<iframe>` `src` attribute in `index.html`.

---

## 6. Domain Name (When You Purchase One)
- **Default URLs**:
  - GitHub Pages: `https://<your-username>.github.io/<repo-name>/`
  - Cloudflare Pages: `https://spine-automotive.pages.dev/`
- **When You Connect `https://spineautomotive.com` (or your chosen domain)**:
  - Update `sitemap.xml` with your live domain URL.
  - Update `robots.txt` Sitemap reference.
  - Update `<link rel="canonical" href="...">` and Open Graph `og:url` tags in `index.html` and `privacy.html`.
