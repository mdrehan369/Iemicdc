import { Container } from "@/components/Container";
import { DataBox } from "@/components/DataBox";
import Image from "next/image";

export default function About() {
  return (
    <Container className="flex flex-col items-center justify-start gap-10 md:py-20 py-10 animate-animate-appear">
      <div className=" w-[80%] flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between">
        <DataBox
          title="Dr. Michael Sheng"
          data="Dr. Michael Sheng
                Distinguished Professor & Head of School of Computing, Macquarie University
                Vice Chair, IEEE Technical Community on Services Computing
                Member, ACS Technical Advisory Board on IoT.
                <br /> <br />
                Dr. Michael Sheng is a Distinguished Professor and Head of the School of Computing at Macquarie University, with a strong background in services computing and the Internet of Things (IoT). Before joining Macquarie, he spent 10 years at the University of Adelaide, where he held senior leadership roles, including Interim Head and Deputy Head of the School of Computer Science.
                <br /><br />
                Dr. Sheng holds a PhD in Computer Science from UNSW and conducted postdoctoral research at CSIRO's ICT Centre (now Data61). He is ranked among the Top 5 authors worldwide in Services Computing and Top 20 in Web of Things by Microsoft Academic. His contributions to the field have earned him numerous awards, including the AMiner Most Influential Scholar Award in IoT, an ARC Future Fellowship, and the Chris Wallace Award for Outstanding Research.
                A recognized leader in his field, Dr. Sheng serves as Vice Chair of the IEEE Technical Community on Services Computing and is a member of the ACS Technical Advisory Board on IoT. His work continues to shape the direction of research and development in computing technologies."
        />
        <Image src="/images/S1.png" width={400} height={400} alt="SP2" />
      </div>

      <div className=" w-[80%] flex md:flex-row flex-col-reverse gap-6 md:gap-0 items-center justify-between">
        <Image src="/images/S2.png" width={400} height={400} alt="SP1" />
        <DataBox
          title="Prof. Amlan Chakrabarti"
          data="Professor Dr. Amlan Chakrabarti
Professor and Director, A.K. Choudhury School of IT, University of Calcutta
Adjunct Professor, IIIT Delhi
Chief Coordinator, International Center of Excellence for Data Science, AI, and Futuristic Technologies, Government of West Bengal
<br /><br />
Professor Dr. Amlan Chakrabarti is an accomplished academic and researcher with over 20 years of experience in engineering education and research. He is the Director of the A.K. Choudhury School of IT at the University of Calcutta and an Adjunct Professor at IIIT Delhi. He also serves as the Chief Coordinator of the International Center of Excellence for Data Science, AI, and Futuristic Technologies, an initiative by the Government of West Bengal aimed at advancing research and innovation in emerging technologies.
<br /><br />
With a Ph.D. in Quantum Computing from the University of Calcutta and postdoctoral research at Princeton University, Professor Chakrabarti is an expert in quantum computing, machine learning, computer vision, and cyber-physical systems. He has published over 200 research papers and received numerous awards, including the Young Scientist Award, the BOYSCAST Fellowship, and recognition as a Senior Member of IEEE.
Professor Chakrabarti is passionate about fostering innovation through collaboration and education, with a commitment to advancing science and technology for global impact."
        />
      </div>
    </Container>
  );
}
