
// =========================
// SIDEBAR SYSTEM
// =========================

const toolContent = {

  keyword: `
  
  <div class="tool-section">

    <div class="research-box">

      <input
      type="text"
      id="keyword"
      placeholder="Enter Pinterest keyword">

      <button onclick="generateKeywordResearch()">
        Analyze
      </button>

    </div>

    <div id="results"></div>

  </div>

  `,

  title: `

  <div class="tool-section">

    <div class="research-box">

      <input
      type="text"
      id="titleKeyword"
      placeholder="Enter keyword for titles">

      <button onclick="generateTitles()">
        Generate
      </button>

    </div>

    <div id="titleResults"></div>

  </div>

  `,

  tags: `

  <div class="tool-section">

    <div class="research-box">

      <input
      type="text"
      id="tagKeyword"
      placeholder="Enter keyword for tags">

      <button onclick="generateTags()">
        Generate
      </button>

    </div>

    <div id="tagResults"></div>

  </div>

  `

};

// =========================
// SWITCH TOOL
// =========================

function switchTool(tool){

  const container =
  document.getElementById("dynamicContent");

  container.innerHTML =
  toolContent[tool];

}

// =========================
// KEYWORD DATABASE
// =========================

const keywordGroups = {

  bedroom: [

    "modern bedroom ideas",
    "small bedroom ideas",
    "cozy bedroom aesthetic",
    "minimal bedroom decor",
    "luxury bedroom inspiration",
    "dark bedroom ideas",
    "bedroom makeover",
    "cute bedroom setup"

  ],

  nails: [

    "pink summer nails",
    "vacation nails",
    "beach nails",
    "almond nails",
    "short summer nails",
    "cute acrylic nails",
    "bright tropical nails",
    "summer nail inspiration"

  ],

  fashion: [

    "old money outfits",
    "casual summer outfits",
    "minimal outfits",
    "travel outfits",
    "neutral outfits",
    "european fashion style",
    "street style outfits",
    "classy outfit ideas"

  ],

  travel: [

    "beach vacation",
    "travel aesthetic",
    "travel photography",
    "europe travel ideas",
    "summer travel outfits",
    "vacation inspiration",
    "tropical destinations",
    "travel bucket list"

  ],

  recipes: [

    "healthy dinner recipes",
    "easy pasta recipes",
    "high protein meals",
    "air fryer recipes",
    "meal prep ideas",
    "healthy snacks",
    "easy lunch ideas",
    "low calorie meals"

  ]

};

// =========================
// DETECT CATEGORY
// =========================

function detectCategory(keyword){

  keyword = keyword.toLowerCase();

  if(
    keyword.includes("bedroom") ||
    keyword.includes("decor") ||
    keyword.includes("room")
  ){
    return "bedroom";
  }

  if(
    keyword.includes("nail") ||
    keyword.includes("acrylic") ||
    keyword.includes("manicure")
  ){
    return "nails";
  }

  if(
    keyword.includes("fashion") ||
    keyword.includes("outfit") ||
    keyword.includes("style")
  ){
    return "fashion";
  }

  if(
    keyword.includes("travel") ||
    keyword.includes("vacation") ||
    keyword.includes("trip")
  ){
    return "travel";
  }

  if(
    keyword.includes("recipe") ||
    keyword.includes("food") ||
    keyword.includes("meal")
  ){
    return "recipes";
  }

  return null;

}

// =========================
// GENERATE KEYWORD RESEARCH
// =========================

function generateKeywordResearch(){

  const keyword =
  document
  .getElementById("keyword")
  .value
  .trim()
  .toLowerCase();

  const results =
  document.getElementById("results");

  if(keyword === ""){

    results.innerHTML = `

    <div class="result-card">

      Please enter a keyword.

    </div>

    `;

    return;
  }

  const category =
  detectCategory(keyword);

  if(!category){

    results.innerHTML = `

    <div class="result-card">

      <h2 style="margin-bottom:20px;">
      No Strong Pinterest Match Found
      </h2>

      <p>
      Try keywords related to:
      nails, bedroom decor,
      fashion, travel, recipes,
      beauty, or lifestyle niches.
      </p>

    </div>

    `;

    return;
  }

  const relatedKeywords =
  keywordGroups[category];

  let keywordRows = "";

  relatedKeywords.forEach(item => {

    let competition =
    "Medium";

    if(item.split(" ").length <= 2){

      competition = "High";
    }

    if(item.split(" ").length >= 4){

      competition = "Low";
    }

    let volume =
    Math.floor(
    Math.random() * 40000 + 3000
    );

    keywordRows += `

    <div class="table-row">

      <span>${item}</span>

      <span>${volume.toLocaleString()}</span>

      <span>${competition}</span>

    </div>

    `;
  });

  const trendScore =
  Math.floor(
  Math.random() * 15 + 85
  );

  const totalVolume =
  Math.floor(
  Math.random() * 70000 + 10000
  );

  results.innerHTML = `

  <div class="stats-grid">

    <div class="stat-card">

      <h3>Estimated Search Volume</h3>

      <p>${totalVolume.toLocaleString()}</p>

    </div>

    <div class="stat-card">

      <h3>Competition</h3>

      <p>Medium</p>

    </div>

    <div class="stat-card">

      <h3>Trend Score</h3>

      <p>${trendScore}%</p>

    </div>

  </div>

  <div class="keyword-table">

    <div class="table-head">

      <span>Keyword</span>

      <span>Search Volume</span>

      <span>Competition</span>

    </div>

    ${keywordRows}

  </div>

  `;

}

// =========================
// TITLE GENERATOR
// =========================

function generateTitles(){

  const keyword =
  document
  .getElementById("titleKeyword")
  .value
  .trim();

  const results =
  document
  .getElementById("titleResults");

  results.innerHTML = `

  <div class="result-card">

    <h2 style="margin-bottom:20px;">
    Pinterest SEO Titles
    </h2>

    <p>

    • ${keyword} ideas for 2026<br><br>

    • viral ${keyword} inspiration<br><br>

    • best ${keyword} trends to try<br><br>

    • aesthetic ${keyword} ideas<br><br>

    • trending ${keyword} content

    </p>

  </div>

  `;

}

// =========================
// TAG GENERATOR
// =========================

function generateTags(){

  const keyword =
  document
  .getElementById("tagKeyword")
  .value
  .trim();

  const results =
  document
  .getElementById("tagResults");

  results.innerHTML = `

  <div class="result-card">

    <h2 style="margin-bottom:20px;">
    Pinterest Tags
    </h2>

    <p>

    #${keyword.replaceAll(" ","")}<br><br>

    #pinterestideas<br><br>

    #viralcontent<br><br>

    #aestheticideas<br><br>

    #trendingnow

    </p>

  </div>

  `;

}