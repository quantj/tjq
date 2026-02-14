# Find Wild Coffee
## Mapping Montreal's Independent Cafe Scene

![Find Wild Coffee Screenshot](https://raw.githubusercontent.com/quantj/tjq/refs/heads/main/content/projects/find-wild-coffee-pic.png)

**Project Type:** Side Project | **Role:** Solo Creator (Design & Development) | **Year:** 2025

---

## The Challenge

Finding quality independent cafes in Montreal was surprisingly difficult. Google Maps has limitations that frustrated the coffee discovery experience:

* **Limited View**: Shows only a small section at a time, making it hard to see the full landscape
* **Chain Clutter**: Results include large chains alongside independent shops
* **No Curation**: No way to filter for quality independent cafes specifically
* **Discovery Problem**: Coffee enthusiasts need a comprehensive view of Montreal's independent cafe scene

The goal was simple: create a map showing all independent cafes in Montreal, minus the chains.

---

## The Solution

Built a comprehensive map of 600+ independent cafes across Montreal, designed for easy discovery and exploration.

### Core Features

**Comprehensive Coverage**
* 600+ independent cafes mapped across Montreal
* Chain cafes explicitly excluded
* Automated data collection and updates

**Smart Organization**
* Cafes organized by neighborhood for easier browsing
* Featured section highlighting the best cafes
* Clean, map-based interface for spatial discovery

**Built for Sustainability**
* Fully automated data pipeline
* Designed to run within free tier limits
* Minimal ongoing maintenance required

---

## Approach

### The Data Challenge

The biggest technical challenge was data collection. To get comprehensive coverage of Montreal's cafe scene, I built a custom data ingestion pipeline:

**Strategy:**
1. Used Google Maps API as the data source
2. Created a search grid system covering all of Montreal
3. Made multiple API calls to systematically capture every area
4. Filtered and cleaned data to remove chains and duplicates

**Tech Stack:**
* **Data Pipeline**: BigQuery for storage and analysis
* **Automation**: Apps Script for scheduled data collection
* **Visualization**: Leaflet for interactive maps
* **Constraint**: Everything runs on free tiers (except annual domain cost)

### Product Decisions

With 600+ cafes, the key challenge was information architecture:

**Solution: Two-Level Organization**
1. **Neighborhood Breakdown**: Group cafes by Montreal neighborhoods for easier browsing
2. **Featured Section**: Curate and highlight the best cafes for quick recommendations

This structure solved the "too much data" problem while maintaining discoverability.

---

## Results & Impact

### Current Status

* **Live**: Fully operational at findwildcoffee.com
* **Automated**: Runs with minimal maintenance
* **Cost-Efficient**: Under $50/year (domain only)
* **Coverage**: 600+ independent Montreal cafes
* **Stage**: Experimental POC, not heavily promoted

### Technical Learnings

**Data Engineering:**
* Search grid methodology successfully captured comprehensive coverage
* API rate limiting and free tier constraints required creative batching
* Automation reduced manual work from hours to minutes

**Product Strategy:**
* Neighborhood organization proved effective for large datasets
* Featured section addressed the "paradox of choice" problem
* MVP approach validated concept before scaling

### What's Next

The project is live and functional, but could be enhanced with:
* Advanced search and filter functions
* User-submitted reviews or ratings
* Mobile app for on-the-go discovery
* Expansion to other cities

---

## Why This Project Matters

As a PM, this project demonstrates:

**Technical Depth**
* Built end-to-end: data pipeline, backend automation, frontend interface
* Comfortable with APIs, databases, and web development
* Can prototype and ship independently

**Product Thinking**
* Identified a real user problem and built a focused solution
* Made deliberate trade-offs (free tier constraints, MVP scope)
* Designed information architecture for usability at scale

**Data Analytics Capability**
* Designed and implemented automated data collection pipeline
* Worked with APIs, BigQuery, and data transformation
* Built sustainable, scalable data systems

---

## View Project

🔗 **[Visit Find Wild Coffee →](https://findwildcoffee.com)**

---

[← Back to Projects](../index.html#projects)
