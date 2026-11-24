import type { ResumeData } from '../types'

export const resumeData: ResumeData = {
  personal: {
    firstName: 'Grzegorz',
    lastName: 'Kosek',
    title: 'Senior Consultant \u00b7 Data & AI Engineering',
    tagline:
      'Designing scalable data platforms and AI-driven solutions on Azure \u2014 turning complex data into actionable insights.',
    email: 'kosek.grzegorzz@gmail.com',
    phone: '697-994-881',
    github: 'https://github.com/kosek-g',
    linkedin: 'https://linkedin.com/in/grzegorz-kosek',
    location: 'Katowice, Poland',
  },
  skills: [
    {
      category: 'Languages',
      skills: ['Python', 'PySpark', 'SQL', 'Bash', 'Rust (basic)'],
    },
    {
      category: 'Cloud & Infra',
      skills: ['Azure', 'Terraform', 'Docker', 'Kubernetes', 'GCP'],
    },
    {
      category: 'AI / ML',
      skills: [
        'AI Agents',
        'GitHub Copilot',
        'LangChain & LangGraph',
        'Azure AI Foundry',
        'Prompt Engineering',
        'Machine Learning',
      ],
    },
    {
      category: 'Data',
      skills: [
        'Databricks',
        'dbt',
        'ADF',
        'Delta Lake',
        'ETL & ELT',
        'Medallion Architecture',
        'SQL & NoSQL',
      ],
    },
    {
      category: 'DevOps & MLOps',
      skills: ['Azure DevOps', 'GitHub Actions', 'GitLab', 'MLFlow'],
    },
  ],
  certifications: [
    {
      id: 'cert-claude-foundations',
      name: 'Claude Certified Developer \u2013 Foundations (CCDV-F)',
      issuer: 'Anthropic',
      date: 'November 2026',
    },
    {
      id: 'cert-github-copilot',
      name: 'GitHub Copilot',
      issuer: 'GitHub',
      date: 'July 2026',
    },
    {
      id: 'cert-devops-expert',
      name: 'DevOps Engineer Expert',
      issuer: 'Microsoft',
      date: 'August 2023',
    },
    {
      id: 'cert-azure-developer',
      name: 'Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'April 2023',
    },
    {
      id: 'cert-terraform',
      name: 'Terraform Associate',
      issuer: 'HashiCorp',
      date: 'March 2023',
    },
    {
      id: 'cert-azure-data-scientist',
      name: 'Azure Data Scientist Associate',
      issuer: 'Microsoft',
      date: 'October 2022',
    },
    {
      id: 'cert-databricks-spark',
      name: 'Associate Developer for Apache Spark 3.0',
      issuer: 'Databricks',
      date: 'September 2022',
    },
    {
      id: 'cert-azure-data-engineer',
      name: 'Azure Data Engineer Associate',
      issuer: 'Microsoft',
      date: 'June 2022',
    },
    {
      id: 'cert-ibm-ds',
      name: 'Data Science Professional Certificate',
      issuer: 'IBM',
      date: 'December 2021',
    },
  ],
  experience: [
    {
      id: 'exp-avanade',
      company: 'Avanade',
      period: 'October 2022 \u2014 Present',
      location: 'Krak\u00f3w, Poland',
      positions: [
        'Senior Consultant, Data Engineering  (June 2025 \u2014 Present)',
        'Consultant, Data Engineering  (October 2022 \u2014 May 2025)',
      ],
      roles: [
        {
          title: 'Data Engineer',
          context: 'Manufacture industry',
          description: [
            'Built the HR data platform on Databricks using Asset Bundles and dbt, with a layered pipeline from raw files to a unified silver model, covering payroll and vacation data for 18 country feeds.',
            'Wrote a PySpark ingestion engine that loads Excel and CSV files into Unity Catalog, handles schemas that change over time, and records where and when each file was loaded.',
            'Built the dbt layer: history-tracking snapshots, bronze views and an incremental silver model that unifies all countries, with data contracts and data-quality and unit tests.',
            'Set up CI/CD in Azure DevOps for all environments, with automated tests and failure alerts, and led the two-wave HR go-live.',
            "Extended the platform to other domains and built an AI coding agent that applies the platform's standards and speeds up onboarding of new projects and development in general.",
            'Helped with the migration of a data governance tool from Microsoft Purview to Open Metadata, using Azure Kubernetes Services.',
          ],
          technologies: ['Python', 'PySpark', 'Databricks Asset Bundles', 'dbt', 'Unity Catalog', 'Azure DevOps', 'Azure Kubernetes Services'],
        },
        {
          title: 'AI Engineer',
          context: 'Consumer goods industry',
          description: [
            'Built an AI agentic framework using LangChain and LangGraph designed for enterprise data scientists and ML engineers.',
            'Implemented comprehensive CI/CD testing strategies \u2014 unit, integration, and end-to-end \u2014 to ensure reliability and performance.',
            'Collaborated with stakeholders to translate business goals into technical specifications and deliver customized agentic solutions.',
          ],
          technologies: ['Python', 'LangChain', 'LangGraph', 'Azure OpenAI', 'Azure', 'CI/CD'],
        },
        {
          title: 'AI Engineer',
          context: "Avanade's Sales Team",
          description: [
            'Co-developed a sales automation solution using Azure OpenAI to parse incoming emails and automatically generate candidate CVs, draft client proposals, and create Azure DevOps work items.',
            'Built a backend with Azure Functions and Microsoft Graph to power a custom Outlook add-in, enabling sales staff to trigger and interact with the automation directly from their inbox.',
          ],
          technologies: ['Azure OpenAI', 'Azure Functions', 'Microsoft Graph', 'Azure DevOps'],
        },
        {
          title: 'Data Engineer / MLOps',
          context: 'Consumer goods industry',
          description: [
            'Participated in the development of a product supporting data scientists and ML engineers across the organization using Azure, Databricks and Google Cloud.',
            'Led migration of two ML algorithms into the new framework, enhancing performance and scalability.',
            'Developed template pipelines to streamline and automate the model development and deployment process, reducing time-to-market.',
            'Worked on implementation and optimization of CI/CD processes, driving automation and standardization.',
          ],
          technologies: ['Python', 'Databricks', 'Azure', 'GCP', 'MLFlow', 'CI/CD'],
        },
        {
          title: 'Data Engineer',
          context: 'Telecommunication industry',
          description: [
            'Helped with solution migration from Azure Functions into Synapse Analytics.',
            'Built and maintained multiple pipelines processing ~2.5 billion raw records per month.',
            'Used Spark, SQL and Synapse Pipelines to deliver an optimized and scalable solution.',
          ],
          technologies: ['Python', 'Spark', 'SQL', 'Synapse Analytics', 'Azure Functions'],
        },
        {
          title: 'Data Engineer',
          context: 'Retail industry',
          description: [
            'Strengthened data security across Azure services (ADLS, Databricks, SQL Servers) by implementing new access and security protocols.',
            'Developed a robust data recovery strategy by creating and executing comprehensive corruption and deletion test scenarios in Delta Lake.',
            'Implemented proactive alert rules using Azure Monitor and KQL queries, reducing mean time to detect operational incidents.',
          ],
          technologies: ['Azure', 'Databricks', 'Delta Lake', 'Azure Monitor', 'KQL'],
        },
        {
          title: 'Internal Projects',
          description: [
            'Designed and developed a coding challenge using Terraform, Databricks, Azure OpenAI and Flask.',
            'Built an AI Sales Assistant using Azure OpenAI API and Azure Functions.',
            'Created a reporting solution with Databricks and Azure Form Recognizer.',
          ],
          technologies: ['Terraform', 'Databricks', 'Azure OpenAI', 'Azure Functions', 'Flask'],
        },
      ],
    },
    {
      id: 'exp-capgemini',
      company: 'Capgemini',
      period: 'April 2022 \u2014 September 2022',
      location: 'Krak\u00f3w, Poland',      positions: ['AI & Analytics Consultant  (April 2022 — September 2022)'],      roles: [
        {
          title: 'AI & Analytics Consultant',
          description: [
            'Designed and implemented a reporting solution to optimize hiring and training strategies using Azure, PySpark and Power BI.',
            'Developed ETL pipelines using Python that improved database integration across systems.',
            'Built fifteen actionable Tableau dashboards reporting SLAs, using SQL to model the underlying data.',
            'Utilized Agile methodologies, participating in daily scrums and meetings with staff and business stakeholders.',
          ],
          technologies: ['Python', 'PySpark', 'Azure', 'Power BI', 'Tableau', 'SQL'],
        },
      ],
    },
    {
      id: 'exp-danish-crown',
      company: 'Danish Crown GBS',
      period: 'December 2019 \u2014 March 2022',
      location: 'Krak\u00f3w, Poland',      positions: [
        'Procurement Development Specialist  (August 2021 — March 2022)',
        'Procurement Coordinator  (December 2019 — July 2021)',
      ],      roles: [
        {
          title: 'Procurement Development Specialist',
          period: 'August 2021 \u2014 March 2022',
          description: [
            'Automated reports and tools using Python, DAX and VBA, reducing manual effort across the procurement team.',
            'Completed sourcing analysis resulting in spend decrease.',
            'Modeled data and prepared visualizations for category managers to support strategy development.',
            'Collaborated with the Business Development Team to improve daily operations and reporting.',
          ],
          technologies: ['Python', 'DAX', 'VBA', 'SQL', 'Power BI'],
        },
        {
          title: 'Procurement Coordinator',
          period: 'December 2019 \u2014 July 2021',
          description: [
            'Performed ad-hoc data analysis to support procurement decisions.',
            'Helped with integration of an e-procurement system with SAP.',
            'Developed VBA scripts to facilitate operational work in SAP.',
          ],
          technologies: ['VBA', 'SAP', 'Excel'],
        },
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'AI Sales Assistance',
      description:
        'This project is aimed at exploring the capabilities of the OpenAI API and implementing it within an e-commerce setting focused on audio equipment.',
      technologies: ['Python', 'Azure OpenAI', 'Azure Functions'],
      github: 'https://github.com/kosek-g/open_ai_api',
    },
    {
      id: 'proj-2',
      name: 'HR data platform',
      description:
        'A proof-of-concept HR data platform built on Databricks and dbt, following the medallion architecture.',
      technologies: ['Databricks', 'dbt', 'GitHub Actions'],
      github: 'https://github.com/kosek-g/dab_poc',
    },
    {
      id: 'proj-3',
      name: 'Virtual Resume',
      description:
        'An interactive online resume built as a single-page React application.',
      technologies: ['React 19', 'TypeScript', 'Vite', 'CSS Modules', 'Vitest', 'Cloudflare Pages'],
      github: 'https://github.com/kosek-g/virtual_resume',
    },
    {
      id: 'proj-4',
      name: 'Chinese Flashcards',
      description:
        'A minimal flashcard app for learning Chinese, built for my own study routine. Runs on Cloudflare: a Worker serves the React SPA and a small JSON API backed by a D1 database, so the same word list is available on every device, including mobile.',
      technologies: ['React 19', 'TypeScript', 'Vite', 'CSS Modules', 'Vitest', 'Cloudflare Pages'],
      github: 'https://github.com/kosek-g/chinese_flashcards',
    },
    {
      id: 'proj-5',
      name: 'Rust CSV Validator',
      description:
        'A Rust CLI for validating local or Azure Data Lake Storage Gen2 CSV files against configurable YAML data-quality rules, with human-readable, JSON, and summary reports.',
      technologies: ['Rust', 'CSV', 'Azure Data Lake Storage Gen2', 'YAML', 'GitHub Actions'],
      github: 'https://github.com/kosek-g/rust_csv_validator',
    },
    {
      id: 'proj-6',
      name: 'DB Extractor',
      description:
        'A full-stack application for connecting to PostgreSQL, MySQL, and Azure SQL databases, exporting tables to Apache Parquet, and uploading the files to Azure Blob Storage.',
      technologies: ['Rust', 'React', 'TypeScript', 'Axum', 'Apache Parquet', 'Azure Blob Storage'],
      github: 'https://github.com/kosek-g/rust_db_extractor',
    },
  ],
}
