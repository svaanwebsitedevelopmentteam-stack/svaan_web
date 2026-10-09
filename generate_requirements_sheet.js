const fs = require('fs');
const path = require('path');
const ExcelJS = require('exceljs');

async function createRequirementsWorkbook() {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'SVaaN Global Tech - Digital Engineering & Design Systems';
    workbook.lastModifiedBy = 'Antigravity AI Lead Architect';
    workbook.created = new Date();
    workbook.modified = new Date();

    // Visual Palette
    const BRAND_PRIMARY = '0076CC';   // SVaaN Blue
    const BRAND_DARK = '0A192F';      // Deep Navy Slate
    const BRAND_ACCENT = '38BDF8';    // Sky Blue
    const COLOR_HEADER_BG = '0F172A'; // Slate 900
    const COLOR_HEADER_FG = 'FFFFFF';
    const COLOR_BORDER = 'E2E8F0';

    // Status & Priority Colors
    const STATUS_COLORS = {
        'Available': { bg: 'DCFCE7', fg: '166534' },         // Emerald 100 / 800
        'Needs Replacement': { bg: 'FEF3C7', fg: '92400E' }, // Amber 100 / 800
        'Missing': { bg: 'FEE2E2', fg: '991B1B' }            // Rose 100 / 800
    };

    const PRIORITY_COLORS = {
        'High': { bg: 'FFE4E6', fg: '9F1239' },   // Rose
        'Medium': { bg: 'FEF3C7', fg: '92400E' }, // Amber
        'Low': { bg: 'F0FDF4', fg: '166534' }     // Emerald
    };

    const COLUMNS = [
        { header: 'Page', key: 'page', width: 22 },
        { header: 'Section', key: 'section', width: 24 },
        { header: 'Image / Icon Title', key: 'title', width: 32 },
        { header: 'Asset Type', key: 'assetType', width: 16 },
        { header: 'File Format', key: 'fileFormat', width: 15 },
        { header: 'Required Width (px)', key: 'width', width: 20 },
        { header: 'Required Height (px)', key: 'height', width: 20 },
        { header: 'Aspect Ratio', key: 'aspectRatio', width: 15 },
        { header: 'Description / Purpose', key: 'description', width: 44 },
        { header: 'Desktop / Tablet / Mobile Requirement', key: 'responsiveReq', width: 34 },
        { header: 'Priority', key: 'priority', width: 13 },
        { header: 'Current Asset Status', key: 'status', width: 22 },
        { header: 'Recommended File Name', key: 'fileName', width: 32 },
        { header: 'Notes', key: 'notes', width: 42 }
    ];

    // Helper to format table headers
    function setupSheetHeaders(sheet) {
        sheet.views = [{ state: 'frozen', ySplit: 1, showGridLines: true }];
        sheet.columns = COLUMNS;

        const headerRow = sheet.getRow(1);
        headerRow.height = 34;
        headerRow.eachCell((cell) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: COLOR_HEADER_BG }
            };
            cell.font = {
                name: 'Segoe UI',
                size: 10,
                bold: true,
                color: { argb: COLOR_HEADER_FG }
            };
            cell.alignment = {
                vertical: 'middle',
                horizontal: 'center',
                wrapText: true
            };
            cell.border = {
                top: { style: 'medium', color: { argb: '334155' } },
                bottom: { style: 'medium', color: { argb: BRAND_PRIMARY } },
                left: { style: 'thin', color: { argb: '1E293B' } },
                right: { style: 'thin', color: { argb: '1E293B' } }
            };
        });
    }

    // Helper to add data rows with alternating colors and conditional pills
    function populateTableData(sheet, dataItems) {
        dataItems.forEach((item, index) => {
            const rowNumber = index + 2;
            const row = sheet.addRow(item);
            row.height = 28;

            const isEven = index % 2 === 0;
            const zebraBg = isEven ? 'FFFFFF' : 'F8FAFC';

            row.eachCell((cell, colNumber) => {
                cell.font = { name: 'Segoe UI', size: 9.5 };
                cell.alignment = { vertical: 'middle', wrapText: true };
                cell.border = {
                    top: { style: 'thin', color: { argb: COLOR_BORDER } },
                    bottom: { style: 'thin', color: { argb: COLOR_BORDER } },
                    left: { style: 'thin', color: { argb: COLOR_BORDER } },
                    right: { style: 'thin', color: { argb: COLOR_BORDER } }
                };

                // Default background
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: zebraBg }
                };

                // Alignment specializations
                const key = COLUMNS[colNumber - 1].key;
                if (['width', 'height', 'aspectRatio', 'assetType', 'fileFormat', 'priority', 'status'].includes(key)) {
                    cell.alignment = { vertical: 'middle', horizontal: 'center' };
                }

                // Code/File formatting
                if (key === 'fileName') {
                    cell.font = { name: 'Consolas', size: 9, color: { argb: '0F172A' } };
                }

                // Priority Badge
                if (key === 'priority') {
                    const style = PRIORITY_COLORS[item.priority];
                    if (style) {
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: style.bg } };
                        cell.font = { name: 'Segoe UI', size: 9.5, bold: true, color: { argb: style.fg } };
                    }
                }

                // Status Badge
                if (key === 'status') {
                    const style = STATUS_COLORS[item.status];
                    if (style) {
                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: style.bg } };
                        cell.font = { name: 'Segoe UI', size: 9.5, bold: true, color: { argb: style.fg } };
                    }
                }
            });
        });

        // Enable auto filter
        if (dataItems.length > 0) {
            sheet.autoFilter = {
                from: { row: 1, column: 1 },
                to: { row: dataItems.length + 1, column: COLUMNS.length }
            };
        }
    }

    // ==========================================
    // 1. DATA INVENTORIES
    // ==========================================

    const imagesData = [
        // Homepage
        {
            page: 'Home (/)',
            section: 'HeroSection',
            title: 'Isometric Tech Sphere & Circuit Graphic',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '1254',
            height: '1254',
            aspectRatio: '1:1',
            description: 'Main 3D hero visualization showcasing interconnected digital engineering, AI nodes, and enterprise infrastructure.',
            responsiveReq: 'Desktop: 627x627 display (2x retina); Mobile: 360x360 scaled center',
            priority: 'High',
            status: 'Available',
            fileName: 'herosection.webp',
            notes: 'Active in /public. Verified 198 KB WebP. Already optimized with priority flag in Next.js.'
        },
        {
            page: 'Home (/)',
            section: 'AboutSection',
            title: 'SVaaN Engineering Team Collaboration',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '800',
            height: '600',
            aspectRatio: '4:3',
            description: 'Team photograph representing engineering collaboration, sprint planning, or modern office culture.',
            responsiveReq: 'Desktop: 50% split container; Tablet/Mobile: Full width stacked',
            priority: 'High',
            status: 'Needs Replacement',
            fileName: 'svaan-team-collaboration.webp',
            notes: 'Currently using Unsplash placeholder (photo-1522071820081-009f0129c71c). Needs authentic SVaaN office/team photography.'
        },
        {
            page: 'Home (/)',
            section: 'BlogSection (Post 1)',
            title: 'Business Context Before Code - Editorial Card',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '800',
            height: '480',
            aspectRatio: '5:3 (1.67:1)',
            description: 'Editorial article banner for strategic technology decision-making and product discovery.',
            responsiveReq: 'Desktop: 3-col grid card (380px w); Mobile: 1-col full width card',
            priority: 'Medium',
            status: 'Needs Replacement',
            fileName: 'insight-business-context.webp',
            notes: 'Currently Unsplash photo-1552664730-d307ca884978. Replace with custom branded 3D/editorial abstract graphic.'
        },
        {
            page: 'Home (/)',
            section: 'BlogSection (Post 2)',
            title: 'Small Tech Decisions - Editorial Card',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '800',
            height: '480',
            aspectRatio: '5:3 (1.67:1)',
            description: 'Editorial article banner illustrating system architecture consistency and software quality.',
            responsiveReq: 'Desktop: 3-col grid card; Mobile: 1-col full width card',
            priority: 'Medium',
            status: 'Needs Replacement',
            fileName: 'insight-tech-decisions.webp',
            notes: 'Currently Unsplash photo-1517694712202-14dd9538aa97. Needs bespoke SVaaN branded graphic.'
        },
        {
            page: 'Home (/)',
            section: 'BlogSection (Post 3)',
            title: 'AI Legacy Modernization - Editorial Card',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '800',
            height: '480',
            aspectRatio: '5:3 (1.67:1)',
            description: 'Editorial article banner for AI automation intersecting with existing enterprise architectures.',
            responsiveReq: 'Desktop: 3-col grid card; Mobile: 1-col full width card',
            priority: 'Medium',
            status: 'Needs Replacement',
            fileName: 'insight-ai-modernization.webp',
            notes: 'Currently Unsplash photo-1620912189865-1e8a33da4c5e. Needs bespoke SVaaN branded graphic.'
        },
        {
            page: 'Global (All Pages)',
            section: 'Footer / FooterV2',
            title: 'Geometric Circuit & Cloud Grid Mesh Texture',
            assetType: 'Image',
            fileFormat: 'WebP',
            width: '1920',
            height: '800',
            aspectRatio: '24:10 (2.4:1)',
            description: 'Subtle dark tech textured background image applied behind footer navigation and corporate copyright.',
            responsiveReq: 'Desktop: Full width stretch; Mobile: Center crop with CSS overlay',
            priority: 'High',
            status: 'Available',
            fileName: 'footer-bg.webp',
            notes: 'Active in /public. Optimized to 34.7 KB WebP. Works seamlessly with dark gradient overlay.'
        },

        // About Page
        {
            page: 'About (/about)',
            section: 'StorySection',
            title: 'SVaaN Founding Journey & Origin Story',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '1200',
            height: '800',
            aspectRatio: '3:2',
            description: 'Visual showcase for SVaaN origin in 2021, starting with single application-support engagement in the US.',
            responsiveReq: 'Desktop: 520px container height; Mobile: 360px container height',
            priority: 'High',
            status: 'Needs Replacement',
            fileName: 'svaan-origin-story.webp',
            notes: 'Currently uses Unsplash stock (photo-1552664730-d307ca884978). Needs genuine founder/early company picture or brand visual.'
        },
        {
            page: 'About (/about)',
            section: 'GlobalDeliverySection',
            title: 'Interactive World Map Vector Graphic',
            assetType: 'Illustration',
            fileFormat: 'SVG',
            width: '4378',
            height: '2060',
            aspectRatio: '2.12:1',
            description: 'Hi-res world map with coordinates for Chennai HQ, US, UK, Canada, and UAE delivery hubs.',
            responsiveReq: 'Desktop: Aspect-ratio 2.12:1 container with interactive pins; Mobile: Scrollable map with bottom pin cards',
            priority: 'High',
            status: 'Available',
            fileName: 'svaan-map.svg',
            notes: 'Active in /public (380 KB). Successfully powers responsive geolocation pins and delivery pod modals.'
        },
        {
            page: 'About (/about)',
            section: 'DeliveryHubs',
            title: 'Chennai HQ Operations & Floor Photo',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '800',
            height: '600',
            aspectRatio: '4:3',
            description: 'Chennai headquarters facility, 60+ engineer dev center, and round-the-clock operations pod.',
            responsiveReq: 'Desktop: Modal / Hub detail view; Mobile: Hub accordion image',
            priority: 'Medium',
            status: 'Missing',
            fileName: 'chennai-hq-operations.webp',
            notes: 'Recommended to enrich interactive map modal with genuine Chennai development centre photo.'
        },

        // Leadership Page
        {
            page: 'Leadership (/leadership)',
            section: 'Leadership Grid',
            title: 'Dinesh Natarajan - Executive Portrait',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '400',
            height: '500',
            aspectRatio: '4:5',
            description: 'Professional executive portrait of Dinesh Natarajan, Founder of SVaaN Global Tech.',
            responsiveReq: 'Desktop: 400x500 card; Mobile: Scaled 300x375 with sticky bio',
            priority: 'High',
            status: 'Available',
            fileName: 'dinesh.webp',
            notes: 'Active in /public (73.1 KB). Verified high quality portrait with transparent/dark background.'
        },
        {
            page: 'Leadership (/leadership)',
            section: 'Leadership Grid',
            title: 'Sai Ramamurthy - Executive Portrait',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '400',
            height: '500',
            aspectRatio: '4:5',
            description: 'Professional executive portrait of Sai Ramamurthy, CEO of SVaaN Global Tech.',
            responsiveReq: 'Desktop: 400x500 card; Mobile: Scaled 300x375 with sticky bio',
            priority: 'High',
            status: 'Available',
            fileName: 'Sai.webp',
            notes: 'Active in /public (70.4 KB). Verified high quality portrait with clean corporate framing.'
        },

        // Work / Case Studies
        {
            page: 'Work (/work)',
            section: 'WorkShowcase (Case 1)',
            title: 'Biblical Touring - Dual Platform App Visual',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '1200',
            height: '800',
            aspectRatio: '3:2',
            description: 'Showcase visual representing the travel operations web portal and offline-first tourist mobile guide app.',
            responsiveReq: 'Desktop: Bento case card & Detail hero; Mobile: Scaled card banner',
            priority: 'High',
            status: 'Available',
            fileName: 'case-biblical-touring.svg',
            notes: 'Currently rendered via custom SVG Isometric illustration (Illustrations.Touring). Hi-res app mockup recommended for case page.'
        },
        {
            page: 'Work (/work)',
            section: 'WorkShowcase (Case 2)',
            title: 'Fareeda Homecare - EVV Mobile & Dispatch Visual',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '1200',
            height: '800',
            aspectRatio: '3:2',
            description: 'Showcase visual for healthcare agency dispatch portal, EVV compliance, and family care feed app.',
            responsiveReq: 'Desktop: Bento case card & Detail hero; Mobile: Scaled card banner',
            priority: 'High',
            status: 'Available',
            fileName: 'case-fareeda-homecare.svg',
            notes: 'Currently rendered via Illustrations.HomeCare component. Dedicated UI screen mockups recommended for deep-dive case page.'
        },
        {
            page: 'Work (/work)',
            section: 'WorkShowcase (Case 3)',
            title: 'Siloam - Telemedicine & EHR Suite Visual',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '1200',
            height: '800',
            aspectRatio: '3:2',
            description: 'Visual for clinician WebRTC portal, digital prescriptions, and patient appointment booking mobile app.',
            responsiveReq: 'Desktop: Bento case card; Mobile: Scaled card banner',
            priority: 'High',
            status: 'Available',
            fileName: 'case-siloam-healthcare.svg',
            notes: 'Currently rendered via Illustrations.Healthcare component. Production tablet/mobile mockup recommended.'
        },
        {
            page: 'Work (/work)',
            section: 'WorkShowcase (Case 4)',
            title: 'MMU - Multi-Property Asset Management Visual',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '1200',
            height: '800',
            aspectRatio: '3:2',
            description: 'Showcase visual for real estate portfolio analytics, automated rent collections, and tenant dispatch portal.',
            responsiveReq: 'Desktop: Bento case card; Mobile: Scaled card banner',
            priority: 'High',
            status: 'Available',
            fileName: 'case-mmu-assetmanagement.svg',
            notes: 'Currently shares Illustrations.PropTech component. Dedicated multi-asset dashboard illustration recommended.'
        },
        {
            page: 'Work (/work)',
            section: 'WorkShowcase (Case 5)',
            title: 'Havendeeds - PropTech Title & Escrow Platform Visual',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '1200',
            height: '800',
            aspectRatio: '3:2',
            description: 'Showcase visual for digital closing platform, verified title deed registry, and spatial property search.',
            responsiveReq: 'Desktop: Bento case card; Mobile: Scaled card banner',
            priority: 'High',
            status: 'Available',
            fileName: 'case-havendeeds-proptech.svg',
            notes: 'Currently rendered via Illustrations.PropTech component. Product screenshot mockup recommended.'
        },

        // Solutions Hero Visuals
        {
            page: 'Solutions (/solutions/build)',
            section: 'SolutionHero',
            title: 'Build Solution - Custom Digital Platform Banner',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '800',
            height: '800',
            aspectRatio: '1:1',
            description: '3D isometric engineering illustration representing new digital product builds, MVPs, and web/mobile apps.',
            responsiveReq: 'Desktop: Right split hero block; Mobile: Centered below title',
            priority: 'Medium',
            status: 'Available',
            fileName: 'solution-build-hero.svg',
            notes: 'Currently powered by Icons3D.Build isometric vector with floating nodes.'
        },
        {
            page: 'Solutions (/solutions/modernize)',
            section: 'SolutionHero',
            title: 'Modernize Solution - Architecture Evolution Banner',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '800',
            height: '800',
            aspectRatio: '1:1',
            description: 'Isometric visualization showing legacy monolith transformation into modular microservices & cloud native systems.',
            responsiveReq: 'Desktop: Right split hero block; Mobile: Centered below title',
            priority: 'Medium',
            status: 'Available',
            fileName: 'solution-modernize-hero.svg',
            notes: 'Currently powered by Icons3D.Modernize isometric vector with floating layers.'
        },
        {
            page: 'Solutions (/solutions/operate)',
            section: 'SolutionHero',
            title: 'Operate Solution - 24/7 Live Monitoring Banner',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '800',
            height: '800',
            aspectRatio: '1:1',
            description: 'Visual showing system reliability, continuous observability, SLA response desk, and DevOps maintenance.',
            responsiveReq: 'Desktop: Right split hero block; Mobile: Centered below title',
            priority: 'Medium',
            status: 'Available',
            fileName: 'solution-operate-hero.svg',
            notes: 'Currently powered by Icons3D.Operate isometric support desk vector.'
        },
        {
            page: 'Solutions (/solutions/evolve)',
            section: 'SolutionHero',
            title: 'Evolve Solution - Continuous Growth & AI Banner',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '800',
            height: '800',
            aspectRatio: '1:1',
            description: 'Visual illustrating iterative roadmap planning, automation flywheels, and scaling product performance.',
            responsiveReq: 'Desktop: Right split hero block; Mobile: Centered below title',
            priority: 'Medium',
            status: 'Available',
            fileName: 'solution-evolve-hero.svg',
            notes: 'Currently powered by Icons3D.Evolve flywheel vector.'
        },

        // Careers Page
        {
            page: 'Careers (/careers)',
            section: 'Culture & Benefits',
            title: 'SVaaN Engineering Life & Culture Graphic',
            assetType: 'Image',
            fileFormat: 'WebP / AVIF',
            width: '1200',
            height: '675',
            aspectRatio: '16:9',
            description: 'Photo grid or banner portraying developer workstation culture, hackathons, and learning pods.',
            responsiveReq: 'Desktop: 1200px container; Mobile: 100% viewport width',
            priority: 'Medium',
            status: 'Missing',
            fileName: 'svaan-careers-culture.webp',
            notes: 'Will boost recruitment conversions and convey high-performance company atmosphere.'
        },

        // Contact Page
        {
            page: 'Contact (/contact)',
            section: 'ContactHero',
            title: 'Consultation & Inquiry Isometric Graphic',
            assetType: 'Illustration',
            fileFormat: 'SVG / WebP',
            width: '600',
            height: '600',
            aspectRatio: '1:1',
            description: 'Decorative communication visual indicating active consultation, response within 24 hours, and NDAs.',
            responsiveReq: 'Desktop: Sidebar visual next to form; Mobile: Hidden or scaled top pill',
            priority: 'Low',
            status: 'Missing',
            fileName: 'contact-consultation-graphic.svg',
            notes: 'Enhances trust on enterprise lead capture form next to direct email/phone cards.'
        }
    ];

    const iconsData = [
        // 3D Isometric Core Icons (Icons3D.tsx)
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'Cloud Infrastructure 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric layered floating cloud computing platform with animated pulsing gradients.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Scales to 40x40 (cards) or 80x80 (heroes)',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.Cloud (embedded SVG)',
            notes: 'Used in ServicesGrid, CapabilitiesGrid, and TechStack. Built with CSS keyframe float animations.'
        },
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'Database & Data Pipeline 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric multi-tier database cylinders with data flow connecting lines.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Responsive display',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.Database (embedded SVG)',
            notes: 'Used in ServicesGrid, CapabilitiesAccordion, and TechStack Data section.'
        },
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'Software Product Engineering 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric modular code block matrix symbolizing enterprise software engineering.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Responsive display',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.Software (embedded SVG)',
            notes: 'Used in CapabilitiesGrid and Solution Bento components.'
        },
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'UI/UX & Product Design 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric design canvas with layering planes, wireframe grid, and layout cursor.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Responsive display',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.Design (embedded SVG)',
            notes: 'Used in Product & Experience capability section.'
        },
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'Strategy & Advisory 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric strategic compass / target with directional vectors and milestone node.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Responsive display',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.Strategy (embedded SVG)',
            notes: 'Used in Strategy & Advisory capability cards.'
        },
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'Managed Support & Reliability 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric shield and uptime gear symbolizing continuous SLA maintenance.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Responsive display',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.Support (embedded SVG)',
            notes: 'Used in Operate solution pillar and Support capabilities.'
        },
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'AI & Automation 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric neural network diamond with illuminated synaptic connections.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Responsive display',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.AI (embedded SVG)',
            notes: 'Used in AI automation solutions and TechStack.'
        },
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'Mobile Engineering 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric mobile device slate showing app interface elements and floating gesture ripple.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Responsive display',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.Mobile (embedded SVG)',
            notes: 'Used in Frontend & Mobile domain in TechStack.'
        },
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'Backend Systems 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric clustered server towers connected by high-speed bus lines.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Responsive display',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.Backend (embedded SVG)',
            notes: 'Used in Backend domain in TechStack.'
        },
        {
            page: 'Shared / Multiple',
            section: 'Icons3D Component',
            title: 'Microservices & API 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric decoupled container blocks communicating over gRPC/REST protocols.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100; Responsive display',
            priority: 'High',
            status: 'Available',
            fileName: 'Icons3D.Microservices (embedded SVG)',
            notes: 'Used in Architecture and Modernization sections.'
        },

        // Process Phase 3D Icons
        {
            page: 'Approach (/approach)',
            section: 'ProcessSection',
            title: 'Process Phase 1: Discover 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric magnifying diagnostic lens on system schematics.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100',
            priority: 'Medium',
            status: 'Available',
            fileName: 'Icons3D.ProcessDiscover (embedded SVG)',
            notes: 'Step 1 in engineering delivery methodology.'
        },
        {
            page: 'Approach (/approach)',
            section: 'ProcessSection',
            title: 'Process Phase 2: Shape 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric architecture blueprint grid with modular system foundations.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100',
            priority: 'Medium',
            status: 'Available',
            fileName: 'Icons3D.ProcessShape (embedded SVG)',
            notes: 'Step 2 in engineering delivery methodology.'
        },
        {
            page: 'Approach (/approach)',
            section: 'ProcessSection',
            title: 'Process Phase 3: Prototype 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric interactive test harness with rapid validation nodes.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100',
            priority: 'Medium',
            status: 'Available',
            fileName: 'Icons3D.ProcessPrototype (embedded SVG)',
            notes: 'Step 3 in engineering delivery methodology.'
        },
        {
            page: 'Approach (/approach)',
            section: 'ProcessSection',
            title: 'Process Phase 4: Build & Scale 3D Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '100',
            height: '100',
            aspectRatio: '1:1',
            description: 'Isometric automated assembly and deployment pipeline.',
            responsiveReq: 'Vector SVG viewBox 0 0 100 100',
            priority: 'Medium',
            status: 'Available',
            fileName: 'Icons3D.ProcessBuild (embedded SVG)',
            notes: 'Step 4 in engineering delivery methodology.'
        },

        // Tech Stack Logos / Icons (TechStack.tsx)
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Frontend)',
            title: 'Next.js Official Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Official Next.js N vector emblem.',
            responsiveReq: 'Scales inside 48x48 badge circle across all screen sizes',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-nextjs.svg',
            notes: 'Rendered in TechStack frontend group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Frontend)',
            title: 'React & React Native Atom Vector',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Cyan React orbital atom vector logo.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-react.svg',
            notes: 'Rendered in TechStack frontend group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Frontend)',
            title: 'TypeScript Blue Shield Vector',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Official TS square vector logo.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-typescript.svg',
            notes: 'Rendered in TechStack frontend group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Backend)',
            title: 'Node.js Hexagonal Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Node.js green hexagon vector logo.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-nodejs.svg',
            notes: 'Rendered in TechStack backend group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Backend)',
            title: 'Python Dual Serpent Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Python blue and yellow serpent logo.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-python.svg',
            notes: 'Rendered in TechStack backend group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Backend)',
            title: 'Go (Golang) Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Go cyan speed typography logo.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'Medium',
            status: 'Available',
            fileName: 'tech-golang.svg',
            notes: 'Rendered in TechStack backend group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Cloud)',
            title: 'Amazon Web Services (AWS) Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'AWS smile vector mark.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-aws.svg',
            notes: 'Rendered in TechStack cloud group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Cloud)',
            title: 'Microsoft Azure Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Azure angular cloud vector mark.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-azure.svg',
            notes: 'Rendered in TechStack cloud group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Cloud)',
            title: 'Google Cloud Platform (GCP) Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'GCP multi-color geometric hexagon logo.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-gcp.svg',
            notes: 'Rendered in TechStack cloud group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (DevOps)',
            title: 'Docker Whale Container Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Docker blue whale container ship vector.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-docker.svg',
            notes: 'Rendered in TechStack DevOps group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (DevOps)',
            title: 'Kubernetes Helm Wheel Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Kubernetes 7-spoke ship helm vector.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-kubernetes.svg',
            notes: 'Rendered in TechStack DevOps group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Data)',
            title: 'PostgreSQL Elephant Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'PostgreSQL Slonik elephant vector logo.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'High',
            status: 'Available',
            fileName: 'tech-postgresql.svg',
            notes: 'Rendered in TechStack data group.'
        },
        {
            page: 'Home (/) & Solutions',
            section: 'TechStack (Data)',
            title: 'Redis In-Memory Vector Logo',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Redis stacked ruby database cubes logo.',
            responsiveReq: 'Scales inside 48x48 badge circle',
            priority: 'Medium',
            status: 'Available',
            fileName: 'tech-redis.svg',
            notes: 'Rendered in TechStack data group.'
        },

        // Lucide UI Functional Icons
        {
            page: 'Global (All Pages)',
            section: 'GlobalFloatActions & Header',
            title: 'Direct Phone Dial Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '24',
            height: '24',
            aspectRatio: '1:1',
            description: 'Instant phone call floating FAB button and contact card icon.',
            responsiveReq: 'Mobile bottom dock & Desktop right floating action pill',
            priority: 'High',
            status: 'Available',
            fileName: 'lucide-phone.svg',
            notes: 'Rendered via lucide-react Phone component.'
        },
        {
            page: 'Global (All Pages)',
            section: 'GlobalFloatActions & Header',
            title: 'WhatsApp Instant Chat Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '24',
            height: '24',
            aspectRatio: '1:1',
            description: 'Direct WhatsApp API messaging trigger for prospective clients.',
            responsiveReq: 'Mobile bottom dock & Desktop floating action button',
            priority: 'High',
            status: 'Available',
            fileName: 'lucide-message-circle.svg',
            notes: 'Rendered via lucide-react MessageCircle component.'
        },
        {
            page: 'Global (All Pages)',
            section: 'GlobalFloatActions',
            title: 'Scroll-To-Top Arrow Icon',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '20',
            height: '20',
            aspectRatio: '1:1',
            description: 'Elevated quick-return scroll FAB button.',
            responsiveReq: 'Desktop & Mobile bottom corner',
            priority: 'Medium',
            status: 'Available',
            fileName: 'lucide-arrow-up.svg',
            notes: 'Rendered via lucide-react ArrowUp component.'
        },
        {
            page: 'Global (All Pages)',
            section: 'Header Navigation',
            title: 'Theme Toggle (Sun / Moon) Icons',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '20',
            height: '20',
            aspectRatio: '1:1',
            description: 'Switch between light and dark visual themes across the application.',
            responsiveReq: 'Header right controls on Desktop and Mobile navigation drawer',
            priority: 'High',
            status: 'Available',
            fileName: 'lucide-sun-moon.svg',
            notes: 'Rendered via lucide-react Sun and Moon components.'
        },
        {
            page: 'Global (All Pages)',
            section: 'Header & Drawers',
            title: 'Mobile Hamburger & Close Icons',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '24',
            height: '24',
            aspectRatio: '1:1',
            description: 'Mobile navigation menu trigger and modal dismiss icon.',
            responsiveReq: 'Mobile viewport only (<1024px)',
            priority: 'High',
            status: 'Available',
            fileName: 'lucide-menu-x.svg',
            notes: 'Rendered via lucide-react Menu and X components.'
        },
        {
            page: 'About (/about)',
            section: 'GlobalDeliverySection',
            title: 'Map Geolocation Pulsing Pin Marker',
            assetType: 'Icon',
            fileFormat: 'SVG',
            width: '32',
            height: '32',
            aspectRatio: '1:1',
            description: 'Pulsing geo-beacon pin placed at exact GPS coordinates for Chennai, US, UK, Canada, UAE.',
            responsiveReq: 'Scales precisely relative to world map container coordinates',
            priority: 'High',
            status: 'Available',
            fileName: 'map-pin-pulse.svg',
            notes: 'Custom animated SVG element with CSS ripple ring animation.'
        }
    ];

    const logosData = [
        {
            page: 'Global (All Pages)',
            section: 'Header & Navigation',
            title: 'Primary SVaaN Brand Logo (Light Theme)',
            assetType: 'Logo',
            fileFormat: 'SVG',
            width: '160',
            height: '40',
            aspectRatio: '4:1',
            description: 'Primary corporate vector logo with SVaaN typography and tech mark for light backgrounds.',
            responsiveReq: 'Desktop: 160x40; Mobile: 130x32 with crisp vector scaling',
            priority: 'High',
            status: 'Available',
            fileName: 'Primary_logo.svg',
            notes: 'Active in /public (41.4 KB). Primary brand anchor across all page headers.'
        },
        {
            page: 'Global (All Pages)',
            section: 'FooterV2 & Dark Themes',
            title: 'Primary SVaaN Brand Logo (Inverted / White)',
            assetType: 'Logo',
            fileFormat: 'SVG',
            width: '160',
            height: '40',
            aspectRatio: '4:1',
            description: 'Pure white / transparent reverse version of the SVaaN corporate logo for dark footer backgrounds.',
            responsiveReq: 'Desktop: 160x40; Mobile: 140x35',
            priority: 'High',
            status: 'Needs Replacement',
            fileName: 'svaan-logo-white.svg',
            notes: 'Currently wrapped in an extra white badge container in FooterV2. Adding a native white SVG will enable a cleaner, modern transparent footer.'
        },
        {
            page: 'Global (Browser Tab)',
            section: 'Browser Head',
            title: 'SVaaN Brand Favicon Vector',
            assetType: 'Logo',
            fileFormat: 'SVG',
            width: '48',
            height: '48',
            aspectRatio: '1:1',
            description: 'Clean vector brand favicon rendered in modern desktop and mobile browsers.',
            responsiveReq: 'Browser tab bar & bookmark icon',
            priority: 'High',
            status: 'Available',
            fileName: 'favicon.svg / icon.svg',
            notes: 'Active in /public and /src/app/icon.svg. Crisp multi-DPI rendering.'
        },
        {
            page: 'Mobile OS Home Screen',
            section: 'Apple Web Clip & PWA',
            title: 'Apple Touch Icon (iOS Home Screen)',
            assetType: 'Logo',
            fileFormat: 'PNG',
            width: '180',
            height: '180',
            aspectRatio: '1:1',
            description: 'High-resolution square icon with brand blue background for iOS "Add to Home Screen".',
            responsiveReq: 'Mobile iOS Safari homescreen bookmark',
            priority: 'Medium',
            status: 'Missing',
            fileName: 'apple-touch-icon.png',
            notes: 'Recommended for mobile web app standards and high-resolution bookmarks.'
        },
        {
            page: 'Mobile Android / PWA',
            section: 'Web App Manifest',
            title: 'Android Chrome Web App Icons (192x192 & 512x512)',
            assetType: 'Logo',
            fileFormat: 'PNG',
            width: '512',
            height: '512',
            aspectRatio: '1:1',
            description: 'PWA compliant icons with standard and maskable padding for Android mobile launchers.',
            responsiveReq: 'Android Chrome PWA prompt & splash screen',
            priority: 'Medium',
            status: 'Missing',
            fileName: 'icon-192.png / icon-512.png',
            notes: 'Required for complete PWA compliance and Lighthouse 100/100 PWA audit.'
        },
        {
            page: 'Social Media / Sharing',
            section: 'OpenGraph & Twitter Card',
            title: 'Default OpenGraph Social Share Card',
            assetType: 'Image',
            fileFormat: 'PNG / WebP',
            width: '1200',
            height: '630',
            aspectRatio: '1.91:1',
            description: 'Rich preview image displayed when sharing SVaaN website links on LinkedIn, Twitter/X, Slack, and WhatsApp.',
            responsiveReq: 'Global social media sharing standard: 1200x630 pixels',
            priority: 'High',
            status: 'Needs Replacement',
            fileName: 'og-svaan-enterprise.png',
            notes: 'Currently falls back to square herosection.webp. A dedicated 1200x630 banner with logo, value proposition, and brand gradient is required.'
        },
        {
            page: 'Home (/) & Work',
            section: 'ClientExperiences / Proof',
            title: 'Client Partner Vector Logos (5 Brands)',
            assetType: 'Logo',
            fileFormat: 'SVG',
            width: '180',
            height: '60',
            aspectRatio: '3:1',
            description: 'Clean monochrome SVG vector marks for Biblical Touring, Fareeda Homecare, Siloam, MMU, and Havendeeds.',
            responsiveReq: 'Desktop: Marquee client strip; Mobile: 2-col logo grid',
            priority: 'High',
            status: 'Needs Replacement',
            fileName: 'client-logos-[client].svg',
            notes: 'Currently rendered as styled typography tags in client stories. Vector client logos will elevate enterprise authority.'
        },
        {
            page: 'Security (/security-trust)',
            section: 'Compliance & Standards',
            title: 'SOC 2, ISO 27001, HIPAA & GDPR Trust Badges',
            assetType: 'Logo',
            fileFormat: 'SVG / PNG',
            width: '120',
            height: '120',
            aspectRatio: '1:1',
            description: 'Security certification and data compliance insignias for enterprise credibility.',
            responsiveReq: 'Security & Trust page badge grid',
            priority: 'Medium',
            status: 'Missing',
            fileName: 'badge-soc2.svg / badge-hipaa.svg',
            notes: 'Reinforces enterprise trust with US and healthcare clients (Siloam, Fareeda Homecare).'
        }
    ];

    const animationsData = [
        {
            page: 'Global (All Pages)',
            section: 'Background Layer',
            title: 'Mouse-Tracking Interactive Radial Ambient Orbs',
            assetType: 'Animation',
            fileFormat: 'CSS / Canvas / Framer Motion',
            width: '600',
            height: '600',
            aspectRatio: '1:1',
            description: 'Smooth glowing ambient orbs that follow viewport coordinates with heavy hardware-accelerated blur (200px).',
            responsiveReq: 'Desktop: Active mouse tracking; Mobile: Fixed subtle background glow (low CPU mode)',
            priority: 'High',
            status: 'Available',
            fileName: 'RadialOrbEffect (CSS var(--t-orb-opacity))',
            notes: 'Configured in layout.tsx and individual page sections. Zero-lag CSS transform execution.'
        },
        {
            page: 'Global (Desktop Only)',
            section: 'CustomCursor Component',
            title: 'Smooth Follower Ring & Hover Expansion Dot',
            assetType: 'Animation',
            fileFormat: 'React / Framer Motion',
            width: '32',
            height: '32',
            aspectRatio: '1:1',
            description: 'Custom smooth cursor follower that expands into a ring when hovering interactive cards and links.',
            responsiveReq: 'Desktop only (pointer: fine); Automatically disabled on touchscreen / mobile',
            priority: 'Medium',
            status: 'Available',
            fileName: 'CustomCursor.tsx',
            notes: 'Implemented with pointer-events-none and requestAnimationFrame spring physics.'
        },
        {
            page: 'Home & Solutions',
            section: 'Marquee Component',
            title: 'Infinite Seamless Horizontal Logo / Tech Marquee',
            assetType: 'Animation',
            fileFormat: 'CSS Keyframe (@keyframes marquee)',
            width: '1920',
            height: '80',
            aspectRatio: '24:1',
            description: 'Smooth 40s linear infinite loop ticker with hover-to-pause functionality.',
            responsiveReq: 'Full viewport width across desktop, tablet, and mobile with hardware acceleration',
            priority: 'High',
            status: 'Available',
            fileName: 'Marquee.tsx / globals.css',
            notes: 'Uses will-change: transform and translates -50% for seamless looping.'
        },
        {
            page: 'Home & Header',
            section: 'Availability Beacon',
            title: 'Pulsing Live Status Indicator ("Available for projects")',
            assetType: 'Animation',
            fileFormat: 'CSS Keyframe (@keyframes pulse)',
            width: '12',
            height: '12',
            aspectRatio: '1:1',
            description: 'Green glowing radar beacon indicating immediate engineering availability for enterprise clients.',
            responsiveReq: 'Inline badge next to header CTA and hero section',
            priority: 'Medium',
            status: 'Available',
            fileName: 'BeaconPulse (Tailwind animate-pulse)',
            notes: 'Lightweight SVG / CSS ripple effect.'
        },
        {
            page: 'About (/about)',
            section: 'GlobalDeliverySection',
            title: 'Geo-Coordinates Radar Ripple on World Map',
            assetType: 'Animation',
            fileFormat: 'CSS Keyframe (@keyframes ping)',
            width: '40',
            height: '40',
            aspectRatio: '1:1',
            description: 'Concentric radar rings pulsing around Chennai HQ, New York, London, Toronto, and Dubai pins.',
            responsiveReq: 'Scales with SVG map container without impacting frame rate',
            priority: 'High',
            status: 'Available',
            fileName: 'MapHotspotPulse (CSS)',
            notes: 'Built into AboutSection map overlay with tooltips.'
        },
        {
            page: 'Capabilities & Solutions',
            section: 'ServiceDetailClient',
            title: 'Interactive Accordion Expand & Stagger Reveal',
            assetType: 'Animation',
            fileFormat: 'Framer Motion Layout',
            width: '1200',
            height: 'Auto',
            aspectRatio: 'Flexible',
            description: 'Spring-damped physics animations when expanding capabilities, deliverables, and service journeys.',
            responsiveReq: 'Universal responsive layout transition across all devices',
            priority: 'Medium',
            status: 'Available',
            fileName: 'AnimatePresence / motion.div',
            notes: 'Ensures tactile feel and enterprise polish.'
        }
    ];

    // ==========================================
    // 2. CREATE WORKSHEETS
    // ==========================================

    // Worksheet 1: Summary Dashboard
    const summarySheet = workbook.addWorksheet('Summary Dashboard', {
        views: [{ showGridLines: false }]
    });

    // Worksheet 2: Images & Illustrations
    const imagesSheet = workbook.addWorksheet('Images & Illustrations');
    setupSheetHeaders(imagesSheet);
    populateTableData(imagesSheet, imagesData);

    // Worksheet 3: Icons & SVGs
    const iconsSheet = workbook.addWorksheet('Icons & SVGs');
    setupSheetHeaders(iconsSheet);
    populateTableData(iconsSheet, iconsData);

    // Worksheet 4: Logos & Brand Assets
    const logosSheet = workbook.addWorksheet('Logos & Brand Assets');
    setupSheetHeaders(logosSheet);
    populateTableData(logosSheet, logosData);

    // Worksheet 5: Animations & Micro-Interactions
    const animationsSheet = workbook.addWorksheet('Animations & Micro-Interactions');
    setupSheetHeaders(animationsSheet);
    populateTableData(animationsSheet, animationsData);

    // ==========================================
    // 3. BUILD EXECUTIVE SUMMARY DASHBOARD
    // ==========================================
    const allAssets = [...imagesData, ...iconsData, ...logosData, ...animationsData];
    const totalCount = allAssets.length;
    const availableCount = allAssets.filter(a => a.status === 'Available').length;
    const needsReplacementCount = allAssets.filter(a => a.status === 'Needs Replacement').length;
    const missingCount = allAssets.filter(a => a.status === 'Missing').length;

    const highPriorityCount = allAssets.filter(a => a.priority === 'High').length;
    const medPriorityCount = allAssets.filter(a => a.priority === 'Medium').length;
    const lowPriorityCount = allAssets.filter(a => a.priority === 'Low').length;

    // Set Column Widths for Dashboard
    summarySheet.columns = [
        { width: 4 },  // A (Margin)
        { width: 26 }, // B
        { width: 18 }, // C
        { width: 18 }, // D
        { width: 22 }, // E
        { width: 24 }, // F
        { width: 24 }, // G
        { width: 4 }   // H
    ];

    // Title Banner
    summarySheet.mergeCells('B2:G2');
    const titleCell = summarySheet.getCell('B2');
    titleCell.value = 'SVaaN GLOBAL TECH — DIGITAL ASSET & ICON REQUIREMENTS';
    titleCell.font = { name: 'Segoe UI', size: 16, bold: true, color: { argb: 'FFFFFF' } };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_HEADER_BG } };
    summarySheet.getRow(2).height = 42;

    // Subtitle
    summarySheet.mergeCells('B3:G3');
    const subtitleCell = summarySheet.getCell('B3');
    subtitleCell.value = 'Master Technical Audit, Responsive Dimension Specifications, and Production Delivery Roadmap';
    subtitleCell.font = { name: 'Segoe UI', size: 10, italic: true, color: { argb: '475569' } };
    subtitleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    subtitleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F1F5F9' } };
    summarySheet.getRow(3).height = 24;

    // KPI Summary Section Header
    summarySheet.mergeCells('B5:G5');
    const kpiHeader = summarySheet.getCell('B5');
    kpiHeader.value = 'PROJECT ASSET HEALTH METRICS';
    kpiHeader.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: '0F172A' } };
    kpiHeader.alignment = { vertical: 'middle', horizontal: 'left' };
    kpiHeader.border = { bottom: { style: 'medium', color: { argb: BRAND_PRIMARY } } };
    summarySheet.getRow(5).height = 28;

    // KPI Cards
    const kpis = [
        { cellVal: 'B6:B7', label: 'TOTAL ASSETS AUDITED', val: totalCount, bg: 'F8FAFC', fg: '0F172A', border: 'CBD5E1' },
        { cellVal: 'C6:C7', label: 'AVAILABLE & ACTIVE', val: availableCount, bg: 'DCFCE7', fg: '166534', border: '86EFAC' },
        { cellVal: 'D6:D7', label: 'NEEDS REPLACEMENT', val: needsReplacementCount, bg: 'FEF3C7', fg: '92400E', border: 'FDE68A' },
        { cellVal: 'E6:E7', label: 'MISSING ASSETS', val: missingCount, bg: 'FEE2E2', fg: '991B1B', border: 'FCA5A5' },
        { cellVal: 'F6:F7', label: 'HIGH PRIORITY TASKS', val: highPriorityCount, bg: 'FFE4E6', fg: '9F1239', border: 'FDA4AF' },
        { cellVal: 'G6:G7', label: 'READY PERCENTAGE', val: `${Math.round((availableCount / totalCount) * 100)}%`, bg: 'EFF6FF', fg: '1E40AF', border: 'BFDBFE' }
    ];

    summarySheet.getRow(6).height = 22;
    summarySheet.getRow(7).height = 36;

    kpis.forEach(k => {
        const [topCellId, bottomCellId] = k.cellVal.split(':');
        const topCell = summarySheet.getCell(topCellId);
        const bottomCell = summarySheet.getCell(bottomCellId);

        topCell.value = k.label;
        topCell.font = { name: 'Segoe UI', size: 8, bold: true, color: { argb: '64748B' } };
        topCell.alignment = { vertical: 'bottom', horizontal: 'center' };
        topCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: k.bg } };
        topCell.border = {
            top: { style: 'thin', color: { argb: k.border } },
            left: { style: 'thin', color: { argb: k.border } },
            right: { style: 'thin', color: { argb: k.border } }
        };

        bottomCell.value = k.val;
        bottomCell.font = { name: 'Segoe UI', size: 18, bold: true, color: { argb: k.fg } };
        bottomCell.alignment = { vertical: 'top', horizontal: 'center' };
        bottomCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: k.bg } };
        bottomCell.border = {
            bottom: { style: 'thin', color: { argb: k.border } },
            left: { style: 'thin', color: { argb: k.border } },
            right: { style: 'thin', color: { argb: k.border } }
        };
    });

    // Breakdown Table Header
    summarySheet.mergeCells('B9:D9');
    const tableHeader1 = summarySheet.getCell('B9');
    tableHeader1.value = 'ASSET BREAKDOWN BY CATEGORY';
    tableHeader1.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: 'FFFFFF' } };
    tableHeader1.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
    tableHeader1.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_HEADER_BG } };

    summarySheet.mergeCells('E9:G9');
    const tableHeader2 = summarySheet.getCell('E9');
    tableHeader2.value = 'ASSET BREAKDOWN BY PRIORITY';
    tableHeader2.font = { name: 'Segoe UI', size: 10, bold: true, color: { argb: 'FFFFFF' } };
    tableHeader2.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
    tableHeader2.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_HEADER_BG } };
    summarySheet.getRow(9).height = 26;

    // Subheadings
    const catCols = [
        { cell: 'B10', val: 'Category Sheet' },
        { cell: 'C10', val: 'Total Items' },
        { cell: 'D10', val: 'Status Health' }
    ];
    catCols.forEach(c => {
        const cell = summarySheet.getCell(c.cell);
        cell.value = c.val;
        cell.font = { name: 'Segoe UI', size: 9, bold: true, color: { argb: '334155' } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F1F5F9' } };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = { bottom: { style: 'thin', color: { argb: 'CBD5E1' } } };
    });

    const prioCols = [
        { cell: 'E10', val: 'Priority Level' },
        { cell: 'F10', val: 'Count' },
        { cell: 'G10', val: 'Action Turnaround' }
    ];
    prioCols.forEach(c => {
        const cell = summarySheet.getCell(c.cell);
        cell.value = c.val;
        cell.font = { name: 'Segoe UI', size: 9, bold: true, color: { argb: '334155' } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F1F5F9' } };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = { bottom: { style: 'thin', color: { argb: 'CBD5E1' } } };
    });
    summarySheet.getRow(10).height = 22;

    // Category Rows
    const catRows = [
        { name: 'Images & Illustrations', count: imagesData.length, health: `${imagesData.filter(i => i.status === 'Available').length} OK / ${imagesData.filter(i => i.status !== 'Available').length} Action` },
        { name: 'Icons & SVGs', count: iconsData.length, health: `${iconsData.filter(i => i.status === 'Available').length} OK / ${iconsData.filter(i => i.status !== 'Available').length} Action` },
        { name: 'Logos & Brand Assets', count: logosData.length, health: `${logosData.filter(i => i.status === 'Available').length} OK / ${logosData.filter(i => i.status !== 'Available').length} Action` },
        { name: 'Animations & Micro-Interactions', count: animationsData.length, health: `${animationsData.filter(i => i.status === 'Available').length} OK / ${animationsData.filter(i => i.status !== 'Available').length} Action` }
    ];

    const prioRows = [
        { level: 'High Priority', count: highPriorityCount, action: 'Immediate Sprint (Day 1 - 3)' },
        { level: 'Medium Priority', count: medPriorityCount, action: 'Standard Sprint (Week 1)' },
        { level: 'Low Priority / Polish', count: lowPriorityCount, action: 'Pre-launch Refinement' },
        { level: 'All Tracked Items', count: totalCount, action: 'Full Verification Matrix' }
    ];

    for (let i = 0; i < 4; i++) {
        const rowNum = 11 + i;
        summarySheet.getRow(rowNum).height = 22;

        const cRow = catRows[i];
        const cellB = summarySheet.getCell(`B${rowNum}`);
        const cellC = summarySheet.getCell(`C${rowNum}`);
        const cellD = summarySheet.getCell(`D${rowNum}`);
        cellB.value = cRow.name;
        cellB.font = { name: 'Segoe UI', size: 9 };
        cellB.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
        cellB.border = { bottom: { style: 'thin', color: { argb: 'E2E8F0' } } };

        cellC.value = cRow.count;
        cellC.font = { name: 'Segoe UI', size: 9, bold: true };
        cellC.alignment = { vertical: 'middle', horizontal: 'center' };
        cellC.border = { bottom: { style: 'thin', color: { argb: 'E2E8F0' } } };

        cellD.value = cRow.health;
        cellD.font = { name: 'Segoe UI', size: 9, color: { argb: '475569' } };
        cellD.alignment = { vertical: 'middle', horizontal: 'center' };
        cellD.border = { bottom: { style: 'thin', color: { argb: 'E2E8F0' } } };

        const pRow = prioRows[i];
        const cellE = summarySheet.getCell(`E${rowNum}`);
        const cellF = summarySheet.getCell(`F${rowNum}`);
        const cellG = summarySheet.getCell(`G${rowNum}`);
        cellE.value = pRow.level;
        cellE.font = { name: 'Segoe UI', size: 9, bold: i === 0 };
        cellE.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
        cellE.border = { bottom: { style: 'thin', color: { argb: 'E2E8F0' } } };

        cellF.value = pRow.count;
        cellF.font = { name: 'Segoe UI', size: 9, bold: true };
        cellF.alignment = { vertical: 'middle', horizontal: 'center' };
        cellF.border = { bottom: { style: 'thin', color: { argb: 'E2E8F0' } } };

        cellG.value = pRow.action;
        cellG.font = { name: 'Segoe UI', size: 9, color: { argb: '475569' } };
        cellG.alignment = { vertical: 'middle', horizontal: 'center' };
        cellG.border = { bottom: { style: 'thin', color: { argb: 'E2E8F0' } } };
    }

    // Critical Action Items Section
    summarySheet.mergeCells('B16:G16');
    const actHeader = summarySheet.getCell('B16');
    actHeader.value = 'CRITICAL DESIGN & DEVELOPMENT ACTION ITEMS';
    actHeader.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: '0F172A' } };
    actHeader.alignment = { vertical: 'middle', horizontal: 'left' };
    actHeader.border = { bottom: { style: 'medium', color: { argb: BRAND_PRIMARY } } };
    summarySheet.getRow(16).height = 28;

    const actionItems = [
        {
            num: '1',
            title: 'Replace Stock Unsplash Placeholders',
            detail: 'Unsplash images are actively used in AboutSection (team collaborating), about/page.tsx (origin story), and BlogSection (3 insight posts). Replace with authentic SVaaN office photography and branded 3D editorial illustrations.'
        },
        {
            num: '2',
            title: 'Design Bespoke OpenGraph Social Card (1200x630)',
            detail: 'Social sharing currently relies on the square 1254x1254 hero visual. Provide a 1200x630 1.91:1 high-impact OpenGraph card with the SVaaN primary logo, tagline, and blue brand gradient for LinkedIn/Twitter previews.'
        },
        {
            num: '3',
            title: 'Supply Reverse White Vector Logo for Dark Footers',
            detail: 'FooterV2 currently forces a white card container around Primary_logo.svg. Creating svaan-logo-white.svg will allow direct placement onto the dark mesh footer background with modern transparent styling.'
        },
        {
            num: '4',
            title: 'Provide Production App Mockups for Case Studies',
            detail: 'Replace pure code-based SVG illustrations for Biblical Touring, Fareeda Homecare, Siloam, MMU, and Havendeeds with high-fidelity tablet/mobile UI screen mockups inside modern device frames.'
        },
        {
            num: '5',
            title: 'Mobile PWA & Apple Touch Icons Generation',
            detail: 'Export apple-touch-icon.png (180x180), icon-192.png, and icon-512.png to ensure crisp rendering on iOS/Android home screens and satisfy 100/100 PWA Lighthouse audits.'
        }
    ];

    actionItems.forEach((act, idx) => {
        const rowNum = 17 + idx;
        summarySheet.getRow(rowNum).height = 26;

        summarySheet.getCell(`B${rowNum}`).value = `Action #${act.num}: ${act.title}`;
        summarySheet.getCell(`B${rowNum}`).font = { name: 'Segoe UI', size: 9.5, bold: true, color: { argb: '0076CC' } };
        summarySheet.getCell(`B${rowNum}`).alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
        summarySheet.getCell(`B${rowNum}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F8FAFC' } };
        summarySheet.getCell(`B${rowNum}`).border = {
            top: { style: 'thin', color: { argb: 'E2E8F0' } },
            bottom: { style: 'thin', color: { argb: 'E2E8F0' } },
            left: { style: 'thin', color: { argb: 'E2E8F0' } }
        };

        summarySheet.mergeCells(`C${rowNum}:G${rowNum}`);
        const detailCell = summarySheet.getCell(`C${rowNum}`);
        detailCell.value = act.detail;
        detailCell.font = { name: 'Segoe UI', size: 9, color: { argb: '334155' } };
        detailCell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
        detailCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFF' } };
        detailCell.border = {
            top: { style: 'thin', color: { argb: 'E2E8F0' } },
            bottom: { style: 'thin', color: { argb: 'E2E8F0' } },
            right: { style: 'thin', color: { argb: 'E2E8F0' } }
        };
    });

    // Technical Standards Section Header
    summarySheet.mergeCells('B23:G23');
    const stdHeader = summarySheet.getCell('B23');
    stdHeader.value = 'PRODUCTION FILE SPECIFICATIONS & ENCODING RULES';
    stdHeader.font = { name: 'Segoe UI', size: 11, bold: true, color: { argb: '0F172A' } };
    stdHeader.alignment = { vertical: 'middle', horizontal: 'left' };
    stdHeader.border = { bottom: { style: 'medium', color: { argb: BRAND_PRIMARY } } };
    summarySheet.getRow(23).height = 28;

    const standards = [
        { label: 'Next.js Image Loader', rule: 'All raster graphics must be WebP/AVIF with Next.js <Image /> component, explicit width/height or fill, and priority on above-the-fold assets.' },
        { label: 'Vector SVGs Standard', rule: 'Must be sanitized, viewBox defined, width/height omitted or class-driven, and SVGO minified to remove unnecessary XML tags.' },
        { label: 'Raster Compression', rule: 'Max raster file size targets: Hero < 200 KB, Section cards < 80 KB, Thumbnails < 40 KB, Icons < 10 KB. Quality target 80-85% lossy.' },
        { label: 'Aspect Ratio Consistency', rule: 'Portraits: 4:5 (400x500px); Editorial Blog Cards: 5:3 (800x480px); Case Studies: 3:2 (1200x800px); Social OG: 1.91:1 (1200x630px).' }
    ];

    standards.forEach((std, idx) => {
        const rowNum = 24 + idx;
        summarySheet.getRow(rowNum).height = 24;

        summarySheet.getCell(`B${rowNum}`).value = std.label;
        summarySheet.getCell(`B${rowNum}`).font = { name: 'Segoe UI', size: 9, bold: true, color: { argb: '1E293B' } };
        summarySheet.getCell(`B${rowNum}`).alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
        summarySheet.getCell(`B${rowNum}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F1F5F9' } };
        summarySheet.getCell(`B${rowNum}`).border = {
            top: { style: 'thin', color: { argb: 'E2E8F0' } },
            bottom: { style: 'thin', color: { argb: 'E2E8F0' } },
            left: { style: 'thin', color: { argb: 'E2E8F0' } }
        };

        summarySheet.mergeCells(`C${rowNum}:G${rowNum}`);
        const ruleCell = summarySheet.getCell(`C${rowNum}`);
        ruleCell.value = std.rule;
        ruleCell.font = { name: 'Segoe UI', size: 9, color: { argb: '475569' } };
        ruleCell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
        ruleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFF' } };
        ruleCell.border = {
            top: { style: 'thin', color: { argb: 'E2E8F0' } },
            bottom: { style: 'thin', color: { argb: 'E2E8F0' } },
            right: { style: 'thin', color: { argb: 'E2E8F0' } }
        };
    });

    // Save Workbook
    const outputPath = path.join(process.cwd(), 'SVAAN_Image_Icon_Requirements.xlsx');
    await workbook.xlsx.writeFile(outputPath);
    console.log(`Excel file created successfully at: ${outputPath}`);
    return outputPath;
}

createRequirementsWorkbook().catch(err => {
    console.error('Error creating Excel workbook:', err);
    process.exit(1);
});
