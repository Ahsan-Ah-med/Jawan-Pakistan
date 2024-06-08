// Q1: Solve the below code of expressions using short circuit

// I. let exp = "faraz" || (true + false) + 5 && " " || "true";
let exp = "faraz" || (true + false + 5 && " ") || "true";
console.log("Expression I:", exp); // Output: "faraz"

// II. let exp1 = (1 + 2) + ++b || 5 && 0 ; for b = 3;
let b = 3;
let exp1 = 1 + 2 + ++b || (5 && 0);
console.log("Expression II:", exp1); // Output: 7

// III. let exp2 = 32 && true - ++a && " " || "true"; for a = 5;
let a = 5;
let exp2 = (32 && true - ++a && " ") || "true";
console.log("Expression III:", exp2); // Output: " "

// IV. let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
let exp3 = ((true + 3) * 5 && undefined) || "faraz" + 5;
console.log("Expression IV:", exp3); // Output: "faraz5"

// V. let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";
let exp4 = 32 + "abc" || true + false + false || +5 || "true";
console.log("Expression V:", exp4); // Output: "32abc"

// VI. let exp5 = false || (true + true) + 15 && "" || 50;
let exp5 = false || (true + true + 15 && "") || 50;
console.log("Expression VI:", exp5); // Output: 50

// VII. let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
let exp6 = true + false + 5 || false + 8 + "abc" || "true";
console.log("Expression VII:", exp6); // Output: 6

// VIII. let exp7 = "faraz" || false + 10 || "true";
let exp7 = "faraz" || false + 10 || "true";
console.log("Expression VIII:", exp7); // Output: "faraz"

// IX. let exp8 = 12 + (false + false) + true && null || "faraz";
let exp8 = (12 + (false + false) + true && null) || "faraz";
console.log("Expression IX:", exp8); // Output: "faraz"

// X. let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
let exp9 = false + true + false + 2 || ("faraz" && false) || 1 + 10;
console.log("Expression X:", exp9); // Output: 3

// XI. let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
let exp10 = true + false + 5 || false + 8 + "abc" || "true";
console.log("Expression XI:", exp10); // Output: 6

// XII. let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
let exp11 =
  ((true + false) * 3 && "") || false + true - (12 + true + true + false);
console.log("Expression XII:", exp11); // Output: -13

// Q2: Create a mobile brand and model filtering app with filter mobile brand and then second
// dropdown have same brand model in second dropdown and a single search button when click
// the selected brand and model have shown in html body

var mobiles = {
  iphone: {
    iphone7: {
      processor: "Snapdragon 8 Gen 2",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: 200,
          ultrawide: 12,
          telephoto: 10,
          telephotoPeriscope: 10,
        },
        front: 10,
      },
      battery: 5000,
      operatingSystem: "Android 13",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone8: {
      processor: "Snapdragon 12 Gen 5",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: 180,
          ultrawide: 15,
          telephoto: 10,
          telephotoPeriscope: 20,
        },
        front: 12,
      },
      battery: 8000,
      operatingSystem: "iphone 8",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone8plus: {
      processor: "Snapdragon 5 Gen 6",
      memory: {
        ram: 8,
        storage: 128,
      },
      camera: {
        rear: {
          main: 160,
          ultrawide: 18,
          telephoto: 10,
          telephotoPeriscope: 8,
        },
        front: 16,
      },
      battery: 5000,
      operatingSystem: "iphone 8",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphoneX: {
      processor: "Snapdragon 5 Gen 4",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: 130,
          ultrawide: 16,
          telephoto: 10,
          telephotoPeriscope: 18,
        },
        front: 14,
      },
      battery: 6000,
      operatingSystem: "iphone X",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
    iphone11: {
      processor: "Snapdragon 7 Gen 9",
      memory: {
        ram: 16,
        storage: 512,
      },
      camera: {
        rear: {
          main: 150,
          ultrawide: 24,
          telephoto: 16,
          telephotoPeriscope: 10,
        },
        front: 20,
      },
      battery: 10000,
      operatingSystem: "iphone 11",
      specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
    },
  },
  xiomi: {
    redmiA2: {
      modelName: "Mi 12 Pro",
      display: {
        size: 6.73,
        resolution: "3200 x 1440",
        panelType: "AMOLED",
        refreshRate: 120,
      },
      processor: "Snapdragon 8 Gen 1",
      memory: {
        ram: 8,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 4600,
      operatingSystem: "Android 12",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
    redmi10: {
      modelName: "Mi 8 Pro",
      display: {
        size: 5.73,
        resolution: "3000 x 1320",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      processor: "Snapdragon 7 Gen 5",
      memory: {
        ram: 12,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 5000,
      operatingSystem: "Android 11",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi11: {
      modelName: "Mi 14 Pro",
      display: {
        size: 6.0,
        resolution: "3000 x 1240",
        panelType: "AMOLED",
        refreshRate: 150,
      },
      processor: "Snapdragon 8 Gen 4",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 8000,
      operatingSystem: "Android 12",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi12: {
      modelName: "Mi 12 Pro",
      display: {
        size: 7.4,
        resolution: "3200 x 1440",
        panelType: "AMOLED",
        refreshRate: 180,
      },
      processor: "Snapdragon 12 Gen 1",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 8000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi13: {
      modelName: "Mi 14 Pro",
      display: {
        size: 8.03,
        resolution: "4200 x 1540",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      processor: "Snapdragon 8 Gen 6",
      memory: {
        ram: 12,
        storage: 256,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 10000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },

    redmi13C: {
      modelName: "Mi 14 Pro",
      display: {
        size: 8.43,
        resolution: "4200 x 1340",
        panelType: "AMOLED",
        refreshRate: 100,
      },
      processor: "Snapdragon 9 Gen 5",
      memory: {
        ram: 12,
        storage: 512,
      },
      camera: {
        rear: {
          main: "50MP",
          ultrawide: "50MP",
          telephoto: "48MP",
        },
        front: "32MP",
      },
      battery: 10000,
      operatingSystem: "Android 13",
      specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
    },
  },
  realme: {
    realmiNote50: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "6.5 inches",
        resolution: "FHD+ (1080 x 2400 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
      memory: {
        ram: "8GB",
        storage: "128GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "16MP",
        },
      },
      battery: {
        capacity: "5000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmiC67: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "6.7 inches",
        resolution: "FHD+ (1280 x 2100 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
      memory: {
        ram: "8GB",
        storage: "256GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "14MP",
        },
      },
      battery: {
        capacity: "5000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 11",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmiC53: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "7. 1inches",
        resolution: "FHD+ (1180 x 2500 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
      memory: {
        ram: "12GB",
        storage: "128GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "18MP",
        },
      },
      battery: {
        capacity: "8000mAh",
        fastCharging: "65W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmi9: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "7.2 inches",
        resolution: "FHD+ (1180 x 2200 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
      memory: {
        ram: "12GB",
        storage: "256GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "24MP",
        },
      },
      battery: {
        capacity: "10000mAh",
        fastCharging: "75W",
      },
      operatingSystem: "Android 12",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
    realmi9i: {
      brand: "Realme",
      model: " hypothetical model ", // Replace with specific model name
      display: {
        size: "6.9 inches",
        resolution: "FHD+ (1480 x 2400 pixels)",
        type: "AMOLED",
      },
      processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
      memory: {
        ram: "12GB",
        storage: "512GB",
      },
      camera: {
        rear: {
          resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
        },
        front: {
          resolution: "16MP",
        },
      },
      battery: {
        capacity: "2000mAh",
        fastCharging: "70W",
      },
      operatingSystem: "Android 13",
      specialFeatures: [
        "In-display fingerprint sensor",
        "3.5mm headphone jack",
      ],
    },
  },
  samsung: {
    samsung_Galaxy_S24: {
      brand: "Samsung",
      model: "Galaxy S24 Ultra", // Replace with specific model

      // Display
      displaySize: 6.8, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 8 Gen 2", // Replace with actual processor
      ram: 12, // GB
      storage: 512, // GB

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 5000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      os: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S51: {
      brand: "Samsung",
      model: "Galaxy S51 Pro", // Replace with specific model

      // Display
      displaySize: 7.2, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 9 Gen 4", // Replace with actual processor
      ram: 8, // GB
      storage: 256, // GB

      // Cameras
      rearCamera: {
        megapixel: 112,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 8000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      os: "Android 11",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_Prime: {
      brand: "Samsung",
      model: "Galaxy Prime Ultra", // Replace with specific model

      // Display
      displaySize: 7.4, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 8 Gen 10", // Replace with actual processor
      ram: 8, // GB
      storage: 256, // GB

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 5000, // mAh
      fastCharging: "45W Super Fast Charging",

      // Operating System
      os: "Android 13",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S46: {
      brand: "Samsung",
      model: "Galaxy S46 Ultra", // Replace with specific model

      // Display
      displaySize: 5.11, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 8 Gen 2", // Replace with actual processor
      ram: 12, // GB
      storage: 512, // GB

      // Cameras
      rearCamera: {
        megapixel: 108,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 20000, // mAh
      fastCharging: "65W Super Fast Charging",

      // Operating System
      os: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: false,
    },
    samsung_Galaxy_S77: {
      brand: "Samsung",
      model: "Galaxy S77 Ultra", // Replace with specific model

      // Display
      displaySize: 8.5, // Inches
      displayResolution: "3088x1440",
      displayType: "AMOLED",

      // Processor & Memory
      processor: "Snapdragon 12 Gen 24", // Replace with actual processor
      ram: 12, // GB
      storage: 512, // GB

      // Cameras
      rearCamera: {
        megapixel: 158,
        features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
      },
      frontCamera: {
        megapixel: 40,
      },

      // Battery
      batteryCapacity: 20000, // mAh
      fastCharging: "85W Super Fast Charging",

      // Operating System
      os: "Android 14",

      // Additional Specs (Optional)
      fingerprintSensor: true,
      waterResistance: "IP68",
      expandableStorage: true,
    },
  },
};

const brandSelect = document.getElementById("brandSelect");
const modelSelect = document.getElementById("modelSelect");
const searchButton = document.getElementById("searchButton");
const mobileDetails = document.getElementById("mobileDetails");

function populateBrands() {
  const brands = Object.keys(mobiles);
  brands.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand.charAt(0).toUpperCase() + brand.slice(1);
    brandSelect.appendChild(option);
  });
}

function populateModels(brand) {
  modelSelect.innerHTML = '<option value="">Select a model</option>'; // Reset model options
  if (brand) {
    const models = Object.keys(mobiles[brand]);
    models.forEach((model) => {
      const option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
    modelSelect.disabled = false;
  } else {
    modelSelect.disabled = true;
    searchButton.disabled = true;
  }
}

function displayMobileDetails(brand, model) {
  const details = mobiles[brand][model];
  mobileDetails.innerHTML = `
    <h2 class="text-xl font-bold mb-4">${
      brand.charAt(0).toUpperCase() + brand.slice(1)
    } ${model}</h2>
    <p><strong>Processor:</strong> ${details?.processor}</p>
    <p><strong>Memory:</strong> ${
      details?.memory?.ram ? details?.memory?.ram : "Null"
    } GB RAM, ${
    details?.memory?.storage ? details?.memory?.storage : "Null"
  } GB Storage</p>
    <p><strong>Rear Camera:</strong> Main ${
      details?.camera?.rear?.main ? details?.camera?.rear?.main : "Null"
    } MP, Ultrawide ${
    details?.camera?.rear?.ultrawide ? details?.camera?.rear?.ultrawide : "Null"
  } MP, Telephoto ${
    details?.camera?.rear?.telephoto ? details?.camera?.rear?.telephoto : "Null"
  } MP, Telephoto Periscope ${
    details?.camera?.rear?.telephotoPeriscope
      ? details?.camera?.rear?.telephotoPeriscope
      : "Null"
  } MP</p>
    <p><strong>Front Camera:</strong> ${
      details?.camera?.front ? details?.camera?.front : "Null"
    } MP</p>
    <p><strong>Battery:</strong> ${
      details?.battery ? details?.battery : "Null"
    } mAh</p>
    <p><strong>Operating System:</strong> ${
      details?.operatingSystem ? details?.operatingSystem : "Null"
    }</p>
    <p><strong>Special Features:</strong> ${
      details?.specialFeatures ? details?.specialFeatures?.join(", ") : "Null"
    }</p>
  `;
}

brandSelect.addEventListener("change", (e) => {
  const selectedBrand = e.target.value;
  populateModels(selectedBrand);
  searchButton.disabled = true;
  mobileDetails.innerHTML = "";
});

modelSelect.addEventListener("change", (e) => {
  searchButton.disabled = !e.target.value;
});

searchButton.addEventListener("click", () => {
  const selectedBrand = brandSelect.value;
  const selectedModel = modelSelect.value;
  if (selectedBrand && selectedModel) {
    displayMobileDetails(selectedBrand, selectedModel);
  }
});

populateBrands();
