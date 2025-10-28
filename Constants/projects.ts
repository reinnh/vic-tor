import enzyme  from '../assets/enzyme_icon.jpeg';
import hormones from '../assets/hormone_icon.png';
import lipids from '../assets/lipid_icon.jpeg';
import proteins from "../assets/proteins.png";



export const projects = [
  {
    name: "Molecular Characterization of Enzyme Catalytic Efficiency Under Thermal Stress",
    description:
      "Investigated the structural resilience and kinetic behavior of metabolic enzymes subjected to variable thermal gradients. Applied spectrophotometric assays and differential scanning fluorimetry to quantify denaturation thresholds and catalytic turnover. Results contributed to models predicting enzyme stability in bioindustrial and clinical environments.",
    tags: [
      { name: "enzyme kinetics", color: "blue-text-gradient" },
      { name: "spectrophotometry", color: "green-text-gradient" },
      { name: "protein stability", color: "pink-text-gradient" },
    ],
    image: enzyme, // replace with actual image import
    source_code_link: "",
  },
  {
    name: "Quantitative Assessment of Hormonal Biomarkers in Reproductive Biochemistry",
    description:
      "Developed and validated ELISA-based protocols for quantifying estrogen, progesterone, and testosterone across controlled physiological cycles. Integrated biochemical findings with computational statistical modeling to explore hormone regulation pathways and feedback mechanisms influencing fertility and metabolic balance.",
    tags: [
      { name: "ELISA", color: "blue-text-gradient" },
      { name: "biostatistics", color: "green-text-gradient" },
      { name: "hormonal analysis", color: "pink-text-gradient" },
    ],
    image: hormones, // replace with actual image import
    source_code_link: "",
  },
  {
    name: "Lipid Metabolism and Oxidative Stress Profiling in Human Serum Samples",
    description:
      "Executed lipid extraction using solvent partitioning and characterized fatty acid composition via gas chromatography. Correlated oxidative degradation indices with metabolic biomarkers to assess cellular stress levels. Outcomes supported translational studies on lipid metabolism disorders and nutritional interventions.",
    tags: [
      { name: "lipidomics", color: "blue-text-gradient" },
      { name: "gas chromatography", color: "green-text-gradient" },
      { name: "oxidative stress", color: "pink-text-gradient" },
    ],
    image: lipids, // replace with actual image import
    source_code_link: "",
  },
  {
    name: "Protein Structural Mapping and Post-Translational Modification Analysis",
    description:
      "Performed electrophoretic protein separation followed by mass spectrometric peptide mapping to identify structural variants and post-translational modifications. Analyzed data using bioinformatic pipelines to link molecular alterations with enzyme functionality and disease pathophysiology.",
    tags: [
      { name: "mass spectrometry", color: "blue-text-gradient" },
      { name: "bioinformatics", color: "green-text-gradient" },
      { name: "protein analysis", color: "pink-text-gradient" },
    ],
    image: proteins, // replace with actual image import
    source_code_link: "",
  },
];
