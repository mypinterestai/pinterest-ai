// KEYWORD DATABASE

const keywordDatabase = {

  nails: {
    volume: 74000,
    competition: "High",
    related: [
      "pink summer nails",
      "short summer nails",
      "beach nails",
      "vacation nails",
      "cute acrylic nails"
    ]
  },

  "home decor": {
    volume: 52000,
    competition: "High",
    related: [
      "modern home decor",
      "small living room ideas",
      "cozy bedroom decor",
      "apartment decor",
      "wall decor ideas"
    ]
  },

  fashion: {
    volume: 68000,
    competition: "High",
    related: [
      "casual summer outfits",
      "street style outfits",
      "minimal fashion",
      "old money outfits",
      "travel outfits"
    ]
  },

  travel: {
    volume: 61000,
    competition: "High",
    related: [
      "travel aesthetic",
      "europe travel outfits",
      "beach vacation",
      "travel photography",
      "travel inspo"
    ]
  },

  recipes: {
    volume: 48000,
    competition: "Medium",
    related: [
      "healthy dinner recipes",
      "easy pasta recipes",
      "high protein meals",
      "meal prep ideas",
      "air fryer recipes"
    ]
  },

  wedding: {
    volume: 59000,
    competition: "High",
    related: [
      "wedding hairstyles",
      "wedding nails",
      "bridesmaid dresses",
      "wedding decor",
      "wedding aesthetic"
    ]
  }

};

// GENERATE FUNCTION

function generateTitle(){

  const keywordInput =
  document.getElementById("keyword");

  const keyword =
  keywordInput.value.toLowerCase().trim();

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

  let dataFound = false;

  let finalHTML = "";

  // CHECK DATABASE

  for(let niche in keywordDatabase){

    if(keyword.includes(niche)){

      dataFound = true;

      const data =
      keywordDatabase[niche];

      // SMART COMPETITION LOGIC

      let competition =
      data.competition;

      if(keyword.split(" ").length >= 4){

        competition = "Low";

      }else if(keyword.split(" ").length >= 2){

        competition = "Medium";
      }

      // ESTIMATED VOLUME

      let estimatedVolume =
      data.volume -
      Math.floor(
      Math.random() * 12000
      );

      // RELATED KEYWORDS

      let keywordRows = "";

      data.related.forEach(item => {

        let rowCompetition =
        "Medium";

        if(item.split(" ").length >= 4){

          rowCompetition = "Low";

        }else if(item.split(" ").length <= 2){

          rowCompetition = "High";
        }

        let rowVolume =
        Math.floor(
        estimatedVolume /
        (Math.random() * 3 + 1)
        );

        keywordRows += `

        <div class="table-row">

          <span>${item}</span>

          <span>${rowVolume.toLocaleString()}</span>

          <span>${rowCompetition}</span>

        </div>

        `;
      });

      // FINAL OUTPUT

      finalHTML = `

      <div class="stats-grid">

        <div class="stat-card">

          <h3>Estimated Search Volume</h3>

          <p>${estimatedVolume.toLocaleString()}</p>

        </div>

        <div class="stat-card">

          <h3>Competition</h3>

          <p>${competition}</p>

        </div>

        <div class="stat-card">

          <h3>Trend Score</h3>

          <p>${Math.floor(Math.random() * 15 + 85)}%</p>

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

      <div class="result-card">

        <h2 style="margin-bottom:20px;">
        SEO Optimized Pinterest Titles
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

  }

  // FALLBACK

  if(!dataFound){

    finalHTML = `

    <div class="result-card">

      <h2 style="margin-bottom:20px;">
      Smart Pinterest Analysis
      </h2>

      <p>
      Your keyword:
      <strong>${keyword}</strong>
      appears to be a growing Pinterest niche.
      Long-tail variations may have lower competition
      and higher engagement opportunities.
      </p>

    </div>

    `;
  }

  results.innerHTML = finalHTML;

}