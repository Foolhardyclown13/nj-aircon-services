# NJ Aircon Services — Claude Code Starter Prompt
# Paste this into Claude Code after setting up your project

---

## STARTER PROMPT (paste this into Claude Code to begin)

```
I'm building a static lead-generation website for NJ Aircon Services, an aircon 
cleaning business based in Alabel, Sarangani Province, Philippines. We also service 
General Santos City, Malapatan, and Polomolok.

The goal is local SEO — get found on Google and make it easy for customers to 
call or message us on Facebook.

Please do the following in order:

1. Initialize a new Next.js 14 project with:
   - TypeScript
   - Tailwind CSS
   - App Router
   - Static export (output: 'export' in next.config.ts)
   - next/font with Poppins and Inter from Google Fonts

2. Create /lib/constants.ts with all business info:
   - Business name: NJ Aircon Services
   - Phone: [FILL IN YOUR NUMBER]
   - Facebook URL: [FILL IN YOUR FACEBOOK PAGE URL]
   - Facebook Messenger URL: [FILL IN YOUR m.me/pagename]
   - Service areas: Alabel, General Santos City, Malapatan, Polomolok
   - Services + pricing: Regular Clean ₱500, Deep Clean ₱900, PM ₱600

3. Build the homepage (app/page.tsx) with these sections as separate components:
   - Hero: Big headline "Professional Aircon Cleaning in Alabel & General Santos City", 
     subheadline, two CTA buttons: "Call Us Now" (tel: link) and "Message on Facebook" 
     (m.me link). Make the buttons large and mobile-friendly.
   - Services: Cards showing Regular Clean, Deep Clean, and Preventive Maintenance 
     with prices in ₱ and duration
   - WhyChooseUs: 3-4 trust signals (experienced technicians, affordable prices, 
     same-day service available, satisfaction guaranteed)
   - ServiceAreas: List of areas we serve with a brief note about coverage
   - Contact: Web3Forms contact form (Name, Phone, Message) + phone number + 
     Facebook Messenger button
   - Footer: Business name, phone, address (Alabel, Sarangani Province), copyright

4. Set up SEO in app/layout.tsx:
   - Title: "Aircon Cleaning in Alabel & General Santos City | NJ Aircon Services"
   - Meta description mentioning aircon cleaning, Alabel, GenSan, Sarangani
   - JSON-LD LocalBusiness structured data
   - Open Graph tags

5. Make sure:
   - All images use next/image with descriptive alt text
   - Phone number appears as plain text (not just inside a button)
   - Address appears in the footer as plain text
   - The site looks great on mobile first, then desktop
   - Color scheme: primary #0EA5E9 (sky blue), dark #0F172A (navy)
   - Tone is friendly and professional with Filipino-friendly copy

Start with step 1 and 2, then show me the result before continuing.
```

---

## FOLLOW-UP PROMPTS (use these after the initial build)

### To add Web3Forms contact form:
```
Set up the contact form in the Contact component using Web3Forms. 
The form should have fields for Name, Phone Number, and Message. 
Use the access key from process.env.NEXT_PUBLIC_WEB3FORMS_KEY. 
Show a success message after submission. Keep it simple and mobile-friendly.
```

### To improve SEO:
```
Review the entire site for local SEO. Make sure:
- The h1 tag contains "aircon cleaning" and a location
- All section headings (h2) mention a service or location naturally
- All images have descriptive alt text mentioning the service and location
- The JSON-LD structured data is complete and correct
- The meta description is under 160 characters and mentions Alabel and GenSan
```

### To add Google Analytics:
```
Add Google Analytics 4 to the site using the measurement ID from 
process.env.NEXT_PUBLIC_GA_ID. Use next/script with the afterInteractive 
strategy so it doesn't slow down page load.
```

### To deploy to Vercel:
```
Help me prepare this site for deployment to Vercel:
1. Make sure next.config.ts has output: 'export'
2. Check that all environment variables are listed in a .env.example file
3. Confirm the build runs with no errors using: npm run build
4. Give me step-by-step instructions to connect my Namecheap domain to Vercel
```

### To update pricing or info later:
```
Update the pricing in /lib/constants.ts:
- Regular Clean: ₱[NEW PRICE]
- Deep Clean: ₱[NEW PRICE]
Make sure the changes reflect across all components automatically.
```
