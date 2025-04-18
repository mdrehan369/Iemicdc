import { Container } from "@/components/Container";
import PublicationDetails from "@/components/PublicationDetails";
import { Separator } from "@/components/Separator";
// import Image from "next/image";
import Link from "next/link";

const Track = ({
  title,
  list,
  id,
}: {
  title: string;
  list: Array<string>;
  id: string;
}) => {
  return (
    <>
      <h1
        id={id}
        className="md:text-4xl text-2xl font-bold text-primary mt-2 mb-4"
      >
        {title}
      </h1>
      <Separator />
      <ul className=" list-disc mt-6 text-gray-700 mb-10 space-y-2">
        {list.map((item, index) => (
          <li key={index} className="md:text-lg text-sm">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default function Papers() {
  return (
    <Container className=" py-10 flex flex-col items-center justify-start gap-10 animate-animate-appear">
      <div className="w-[80%] text-gray-700">
        <h3 className="md:text-xl text-lg font-medium">
          All papers should be submitted through EasyChair link.
        </h3>
        <ul className="my-4 list-disc mx-4 text-lg">
          <li>
            EasyChair submission link{" "}
            <Link
              className="text-blue-500 underline"
              target="__blank"
              href="https://easychair.org/conferences/?conf=iemicdc2025"
            >
              here
            </Link>
          </li>
          <li>
            Springer Paper Submission Guideline{" "}
            <Link
              className="text-blue-500 underline"
              target="__blank"
              href={
                "https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines"
              }
            >
              here
            </Link>
          </li>
          <li>
            Download Latex Package{" "}
            <Link
              className="text-blue-500 underline"
              target="__blank"
              href={"/templates/Latex_Package.zip"}
            >
              here
            </Link>
          </li>
          <li>
            Download Word Template{" "}
            <Link
              className="text-blue-500 underline"
              target="__blank"
              href={"/templates/Word_Template.zip"}
            >
              here
            </Link>
          </li>
          <li>
            <span className="font-bold">Awards:</span> Best paper award will be
            provided.
          </li>
          <strong className="mt-4 text-red-400">
            Note: Papers should have preferably 10 pages. No short papers
            will be allowed.
          </strong>
        </ul>
      </div>
      <PublicationDetails />
      <div className="w-[80%]">
        <h3 className="md:text-xl text-lg font-medium text-gray-700">
          Topic of interest includes, though not limited to
        </h3>
        <Track
          id="track1"
          title="Track 1: AI And Robotics"
          list={[
            "Expert Systems",
            "Fuzzy Sets and Systems",
            "AI in Modelling and Simulation",
            "Machine Learning",
            "Deep Learning",
            "Intelligent devices and instruments",
            "AI in Scheduling and Optimization",
            "Quantum Machine Learning",
            "Evolutionary Design",
            "Knowledge representation",
            "Robotics",
            "Multi-Robot systems",
            "Robot learning and adaptation",
            "Coordination in robotics",
            "Bioinformatics, Computational Biology",
            "Biomedical sensor & robotics",
            "Heuristic Algorithms",
            "Bio Inspired Algorithms",
            "Evolutionary Algorithms",
            "Brain Computer Interface",
          ]}
        />

        <Track
          id="track2"
          title="Track 2: Cyber security, Blockchain and IoT"
          list={[
            "Networking Protocol",
            "Architecture",
            "Security and privacy",
            "Malware attacks,",
            "Digital forensics",
            "Blockchain, and cryptocurrency",
            "Quantum cryptography",
            "AI & Sensors",
            "Brain Computing Interface",
            "Recent Trends in ICT",
            "Contemporary research in the field of ICT",
            "Industry 4.0/5.0 and Industrial",
            "Healthcare data privacy",
            "Biometric-based authentication systems",
            "Multi-factor-based authentication",
            "Passwordless authentication systems",
            "Smart cities, smart farming, e-health, and home automation applications",
            "Privacy-preserving communication",
          ]}
        />

        <Track
          id="track3"
          title="Track 3: Network Cloud and Big Data"
          list={[
            "Big Data Analytics and Social",
            "Networking",
            "Recent Trends in ICT",
            "Cloud Architecture and applications",
            "Service-Oriented Architecture in Cloud Computing",
            "Cloud based parallel Processing",
            "Mobile Clouds",
            "Data Mining and Analytics",
            "AIML applications in Big Data",
            "Data Visualization",
            "5G and 6G beyond networks",
            "Low Power Wide Area (LPWA) networks",
            "Next generation networks",
            "NFV, RAN, Cloud-RAN, and Fog-RAN",
            "Software Defined Radio (SDR),",
            "Cognitive Radio (D2D) and (M2M) communications",
            "LoRa, Sigfox, NB-IoT",
            "WPAN",
          ]}
        />

        <Track
          id="track4"
          title="Track 4: Virtual and Augmented Reality, Image processing and NLP"
          list={[
            "Image Processing",
            "Speech & music processing",
            "3D and Video Processing",
            "Pattern Recognition",
            "Virtual and Augmented Reality",
            "Computational Linguistics & NLP Dialog Systems",
            "Graph, deep-learning-based methods of NLP and IR",
            "Information Extraction, Retrieval",
            "Opinion, personality and emotion detection in social media",
            "Color, Multi-spectral, and Hyper-spectral Imaging",
            "Image & Video Interpretation and Understanding",
            "Stereoscopic, Multi-view, Detection, Recognition, Retrieval, and Classification",
            "Image & Video Quality Models",
            "Biometrics, Forensics, and Security",
            "Biomedical and Biological Image Processing",
          ]}
        />
      </div>
    </Container>
  );
}
