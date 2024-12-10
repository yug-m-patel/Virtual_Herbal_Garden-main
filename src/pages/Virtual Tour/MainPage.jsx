import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import tulsi from "../../../public/Images/TULSI.jpeg";
import pot from "../../../public/Images/pot.png";
import neem from "../../../public/Images/neem.webp";
import bringraj from "../../../public/Images/bhringraj.png";
import ashwagandha from "../../../public/Images/ashwagandha.png";
import alovera from "../../../public/Images/alovera.jpeg"
import amla from "../../../public/Images/Amla.jpg"

const plantData = [
  {
    localname: "Bhringraj",
    plantDescription:
      "Bhringraj is a medicinal herb known for its rejuvenating properties, particularly for hair growth and scalp health.",
    scientificName: "Eclipta prostrata",
    homegrown: true,
    location: "India",
    primaryImage: bringraj,
    tree:false,
    threedModel: "",
    videoLink: "https://example.com/bhringraj_video.mp4",
    shlok: [
      {
        shlok: "अयःश्यामकवद्भूतिमयं स्कन्धे विभूषणम्।",
        shlok_meaning:
          "Bhringraj is praised as a powerful herb that brings vitality and strength.",
        resource: "Ayurveda Texts",
      },
    ],
    healthBenefits: [
      {
        healthBenefit: "Promotes hair growth",
        howToUse: "Used in oil form for scalp and hair massage.",
      },
      {
        healthBenefit: "Supports liver health",
        howToUse: "Consumed in powdered or juice form.",
      },
    ],
  },
  {
    localname: "Tulsi",
    tree:false,
    plantDescription:
      "Tulsi, also known as holy basil, is an aromatic plant revered in Ayurveda for its healing properties.",
    sideEffects:
      "Balancing for vata and kapha doshas, it may increase pitta in excess.",
    scientificName: "Ocimum sanctum",
    homegrown: true,
    location: "India",
    primaryImage: tulsi,
    threedModel: `
      <iframe title="Holy_basil_plants" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share style="width: 100%; height: 500px; border-radius:10px" src="https://sketchfab.com/models/3272493ccf6c4ede895f259905ef1db8/embed"></iframe>
      <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
        <a href="https://sketchfab.com/3d-models/holy-basil-plants-3272493ccf6c4ede895f259905ef1db8?utm_medium=embed&utm_campaign=share-popup&utm_content=3272493ccf6c4ede895f259905ef1db8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Holy_basil_plants</a> by
        <a href="https://sketchfab.com/dhruv_panch0li?utm_medium=embed&utm_campaign=share-popup&utm_content=3272493ccf6c4ede895f259905ef1db8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1C4AD9;">dhruv_panch0li</a> on
        <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=3272493ccf6c4ede895f259905ef1db8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
      </p>
      
    `,
    videoLink: "https://example.com/tulsi_video.mp4",
    shlok: [
      {
        shlok: "शिवाय विष्णवे नमः",
        shlok_meaning: "Salutations to Lord Shiva and Lord Vishnu",
        resource: "Bhagavad Gita",
      },
    ],
    healthBenefits: [
      {
        healthBenefit: "Boosts immunity",
        howToUse: "Consume as a tea or in food.",
      },
    ],
  },
  {
    localname: "Ashwagandha",
    tree:false,
    plantDescription:
      "Ashwagandha is a powerful adaptogen used in Ayurvedic medicine to promote physical and mental health.",
    scientificName: "Withania somnifera",
    homegrown: true,
    location: "India",
    primaryImage: ashwagandha,
    threedModel: "https://example.com/ashwagandha_model.glb",
    videoLink: "https://example.com/ashwagandha_video.mp4",
    shlok: [
      {
        shlok: "अश्वगन्धा बलप्रदा रोगनाशिनी।",
        shlok_meaning:
          "Ashwagandha grants strength and helps eradicate diseases.",
        resource: "Ayurveda Texts",
      },
    ],
    healthBenefits: [
      {
        healthBenefit: "Reduces stress and anxiety",
        howToUse:
          "Commonly consumed in powdered form, mixed with milk or water.",
      },
      {
        healthBenefit: "Boosts energy",
        howToUse: "Used in capsules or tablets as a supplement.",
      },
    ],
  },
  {
    localname: "Neem",
    tree: true,
    plantDescription:
      "Neem is a versatile medicinal tree with antibacterial, antifungal, and antiviral properties.",
    scientificName: "Azadirachta indica",
    homegrown: true,
    location: "India",
    primaryImage: neem,
    threedModel:
      '<iframe title="Neem Tree" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/neem-tree-03edef8009d942d3a3db6fa64cecbe56?utm_medium=embed&utm_campaign=share-popup&utm_content=03edef8009d942d3a3db6fa64cecbe56" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Neem Tree </a> by <a href="https://sketchfab.com/rohit8999?utm_medium=embed&utm_campaign=share-popup&utm_content=03edef8009d942d3a3db6fa64cecbe56" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Rohit Pawar </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=03edef8009d942d3a3db6fa64cecbe56" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
    videoLink: "https://example.com/neem_video.mp4",
    shlok: [
      {
        shlok: "नीमं तीक्ष्णं व्रणेष्वाज्ञा क्षारयन्ति सदा जनाः।",
        shlok_meaning:
          "Neem is a potent healer used in wound treatment and purification.",
        resource: "Ayurveda Texts",
      },
    ],
    healthBenefits: [
      {
        healthBenefit: "Detoxifies the body",
        howToUse:
          "Used as a paste for skin or in powder form for oral consumption.",
      },
      {
        healthBenefit: "Improves skin health",
        howToUse: "Applied as neem oil or consumed as neem leaves.",
      },
    ],
  },
  {
    localname: "Amla",
    tree:true,
    plantDescription:
      "Amla, also known as Indian gooseberry, is a small, green, round fruit with a sour and bitter taste. It is a rich source of vitamin C and antioxidants.",
    scientificName: "Phyllanthus emblica",
    homegrown: true,
    location: "India",
    primaryImage: amla,
    threedModel: `
    <iframe title="Amla Tree" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share style="width: 100%; height: 500px;" src="https://sketchfab.com/models/your_amla_model_link/embed"></iframe>
    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
      <a href="https://sketchfab.com/3d-models/your_amla_model_link?utm_medium=embed&utm_campaign=share-popup&utm_content=your_amla_model_link" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Amla Tree</a> by
      <a href="https://sketchfab.com/your_profile_link?utm_medium=embed&utm_campaign=share-popup&utm_content=your_amla_model_link" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Your Name</a> on
      <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=your_amla_model_link" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
    </p>
  `,
    videoLink: "https://example.com/amla_video.mp4",
    shlok: [
      {
        shlok: "अमलकी त्वं च वृद्धानां तारुण्यं देहि पुष्टिकम्।",
        shlok_meaning:
          "O Amla! You grant youthfulness and nourishment to the elderly.",
        resource: "Ayurveda Texts",
      },
    ],
    healthBenefits: [
      {
        healthBenefit: "Boosts immunity",
        howToUse: "Consume fresh, in powdered form, or as juice.",
      },
      {
        healthBenefit: "Improves digestion",
        howToUse: "Commonly used in Ayurvedic preparations like Chyawanprash.",
      },
    ],
  },
  {
    localname: 'Aloe Vera',
    tree:false,
    plantDescription: 'A succulent plant species of the genus Aloe, known for its medicinal and cosmetic uses. The gel from the leaves is often used for its soothing properties.',
    scientificName: 'Aloe barbadensis miller',
    homegrown: true,
    location: 'Global',
    primaryImage: alovera,
    threedModel: '<div class="sketchfab-embed-wrapper"> <iframe title="Potted Aloe Vera" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/98b96bd41a1c4ab7af10c938e280c8c8/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/potted-aloe-vera-98b96bd41a1c4ab7af10c938e280c8c8?utm_medium=embed&utm_campaign=share-popup&utm_content=98b96bd41a1c4ab7af10c938e280c8c8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Potted Aloe Vera </a> by <a href="https://sketchfab.com/Jubbies?utm_medium=embed&utm_campaign=share-popup&utm_content=98b96bd41a1c4ab7af10c938e280c8c8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Jubbies </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=98b96bd41a1c4ab7af10c938e280c8c8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
    videoLink: 'https://example.com/aloe_vera_video.mp4',
    shlok: [
      {
        shlok: 'घृतकुमारी अमृत समम्',
        shlok_meaning: 'Aloe Vera is like nectar',
        resource: 'Various Hindu Scriptures'
      }
    ],
    healthBenefits: [
      {
        healthBenefit: 'Soothes skin irritation',
        howToUse: 'Apply the gel directly to the affected area.'
      },
      {
        healthBenefit: 'Aids digestion',
        howToUse: 'Consume Aloe Vera juice as a natural laxative.'
      }
    ]
  }

  
];
// Modal/ Dialog box to show plant details
const PlantDetailsDialog = ({ data, isVisible, onClose }) => {
  if (!data) return null;

  return (
    <div
      className={`mt-[10vh] fixed inset-0 bg-black bg-opacity-50 flex gap-3 items-center justify-center z-50 ${
        isVisible ? "block" : "hidden"
      } `}
    >
      <div className="bg-white p-6 w-1/3 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
        >
          Close
        </button>
        <h2 className="text-2xl mb-4">{data.localname}</h2>
        <p>{data.plantDescription}</p>
        <p>
          <strong>Scientific Name:</strong> {data.scientificName}
        </p>
        <p>
          <strong>Location:</strong> {data.location}
        </p>

        <p>
          <strong>Health Benefits:</strong>
        </p>
        <ul>
          {data.healthBenefits.map((benefit, index) => (
            <li key={index}>
              {benefit.healthBenefit} - {benefit.howToUse}
            </li>
          ))}
        </ul>
        <p>
          <strong>Shlok:</strong>
        </p>
        {data.shlok.map((shlok, index) => (
          <div key={index}>
            <p><strong className="text-slate-600">
              
              {shlok.shlok}
              </strong>
              </p>
            <p>
              - {shlok.shlok_meaning} ({shlok.resource})
            </p>
          </div>
        ))}

        <p>
          <strong>Side Effect:</strong>
        </p>
        {data.sideEffects}
        {/* Render the 3D Model */}
      </div>
      <div dangerouslySetInnerHTML={{ __html: data.threedModel }} />
    </div>
  );
};

const PlantCard = ({ data, onClick }) => {
  return (
    <div
      onClick={() => onClick(data)}
      className="flex flex-col m-10 justify-center items-center h-[25vh] cursor-pointer"
    >
      <img src={data.primaryImage} className="h-[25vh]" alt="Plant" />
      {
           !data.tree &&
        <img src={pot} className="h-[15vh] relative -top-[25px]" alt="Pot" />
      }
      <h3 className="text-slate-500 font-semibold text-xl drop-shadow-xl">
        {data.localname}
      </h3>
    </div>
  );
};

const VirtualTour = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // For controlling dialog visibility

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedPlant(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="grid grid-cols-3  w-screen p-3 justify-start items-start gap-24 my-12 h-screen mt-[13vh]">
        {plantData.map((plant, index) => (
          <PlantCard key={index} data={plant} onClick={handlePlantClick} />
        ))}
      </div>
      <Footer />
      <PlantDetailsDialog
        data={selectedPlant}
        isVisible={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>

  );
};

export default VirtualTour;
