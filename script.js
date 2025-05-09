// College data
const colleges = [
    // College data remaunchangedins
    {
        name: "IIT Hyderabad",
        location: "Hyderabad",
        rating: 4.7,
        cutoff: "EAMCET: 500",
        fee: "₹2,20,000/year",
        courses: ["CSE", "ECE", "ME", "AI/DS"],
        desc: "A premier IIT offering cutting-edge engineering programs and research. Known for innovation and high placements.",
        duration: "4 years",
        type: "Public Technical University",
        mode: "Full-time",
        accreditation: "NAAC A, NBA",
        affiliation: "Autonomous (Under MoE, Government of India)",
        scholarships: "Merit-cum-means scholarships, SC/ST scholarships, UGC/AICTE schemes",
        averagePackage: "₹23 LPA",
        topRecruiters: ["Google", "Microsoft", "Amazon", "Flipkart", "Qualcomm"],
        facilities: ["Hostel", "Library", "Wi-Fi", "Research Labs", "Sports Complex"],
        studentReviews: "Highly reputed faculty and tech-driven culture. Excellent coding atmosphere with ample startup support.",
        moreInfoLink: "https://iith.ac.in/"
      },
      {
        name: "NIT Trichy",
        location: "Chennai",
        rating: 4.6,
        cutoff: "EAMCET: 800",
        fee: "₹1,80,000/year",
        courses: ["CSE", "EEE", "CIVIL", "ECE"],
        desc: "Consistently ranked among the top NITs with excellent faculty and infrastructure.",
        duration: "4 years",
        type: "Public Technical University",
        mode: "Full-time",
        accreditation: "NAAC A+, NBA",
        affiliation: "Autonomous (Under MoE, Government of India)",
        scholarships: "Central Sector Scheme, SC/ST/OBC scholarships, Merit scholarships",
        averagePackage: "₹14 LPA",
        topRecruiters: ["Intel", "Oracle", "TCS", "L&T", "Deloitte"],
        facilities: ["Central Library", "Labs", "Gym", "Wi-Fi", "Mess", "Clubs"],
        studentReviews: "Excellent peer group and academic environment. Focus on overall development and placements.",
        moreInfoLink: "https://www.nitt.edu/"
      },
      {
        name: "BITS Pilani Hyderabad",
        location: "Hyderabad",
        rating: 4.5,
        cutoff: "BITSAT: 350",
        fee: "₹3,00,000/year",
        courses: ["CSE", "BioTech", "AI", "Mechanical"],
        desc: "Renowned for its flexible curriculum and student-driven culture with top-notch academics.",
        duration: "4 years",
        type: "Private Deemed University",
        mode: "Full-time",
        accreditation: "NAAC A+",
        affiliation: "BITS Pilani University",
        scholarships: "Merit-based scholarships, Financial aid up to 75%",
        averagePackage: "₹15 LPA",
        topRecruiters: ["Google", "Zomato", "Adobe", "Cisco", "JP Morgan"],
        facilities: ["Library", "Innovation Lab", "Cultural Hubs", "Wi-Fi", "Student-run Clubs"],
        studentReviews: "High energy environment with focus on self-learning. Freedom and creativity encouraged.",
        moreInfoLink: "https://www.bits-pilani.ac.in/hyderabad/"
      },
      {
        name: "VIT Vellore",
        location: "Chennai",
        rating: 4.4,
        cutoff: "VITEEE: 10,000",
        fee: "₹2,00,000/year",
        courses: ["CSE", "IT", "Mechatronics", "EEE"],
        desc: "A reputed private university with great placement records and modern campus.",
        moreInfoLink: "https://vit.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A++",
        affiliation: "VIT University",
        scholarships: "Merit-based scholarships via VITEEE rank",
        averagePackage: "₹7.3 LPA",
        topRecruiters: ["Microsoft", "Deloitte", "Intel", "TCS", "Infosys"],
        facilities: ["Hostels", "Labs", "Wi-Fi", "Sports Complex", "Library"],
        studentReviews: "Modern campus, amazing placement support, vibrant clubs."
      },
      {
        name: "Amrita Coimbatore",
        location: "Coimbatore",
        rating: 4.2,
        cutoff: "EAMCET: 9000",
        fee: "₹1,60,000/year",
        courses: ["CSE", "Cybersecurity", "EEE", "ECE"],
        desc: "Recognized for its value-based education and emphasis on research.",
        moreInfoLink: "https://www.amrita.edu/campus/coimbatore/",
        duration: "4 years",
        type: "Private (Deemed)",
        mode: "Full-time",
        accreditation: "NAAC A++",
        affiliation: "Amrita Vishwa Vidyapeetham",
        scholarships: "Merit & need-based scholarships available",
        averagePackage: "₹6.2 LPA",
        topRecruiters: ["Amazon", "Cisco", "EY", "Cognizant"],
        facilities: ["Labs", "Green Campus", "Research Centers", "Hostels"],
        studentReviews: "Strong faculty, spiritual environment, excellent labs."
      },
      {
        name: "CUSAT",
        location: "Kochi",
        rating: 4.0,
        cutoff: "CAT: 4000",
        fee: "₹80,000/year",
        courses: ["IT", "CSE", "Marine Engg", "EEE"],
        desc: "A government university known for affordability and strong academic programs.",
        moreInfoLink: "https://www.cusat.ac.in/",
        duration: "4 years",
        type: "Public",
        mode: "Full-time",
        accreditation: "NAAC A",
        affiliation: "Cochin University of Science and Technology",
        scholarships: "Government and university scholarships available",
        averagePackage: "₹5.5 LPA",
        topRecruiters: ["TCS", "Wipro", "ONGC", "L&T", "Infosys"],
        facilities: ["Library", "Hostel", "Marine Workshop", "Computer Labs"],
        studentReviews: "Affordable, practical exposure, solid ROI."
      },
      {
        name: "SRM University",
        location: "Chennai",
        rating: 4.1,
        cutoff: "SRMJEEE: 15,000",
        fee: "₹2,50,000/year",
        courses: ["CSE", "Aerospace", "IT", "EEE"],
        desc: "Popular private university with world-class facilities and foreign collaborations.",
        moreInfoLink: "https://www.srmist.edu.in/",
        duration: "4 years",
        type: "Private (Deemed)",
        mode: "Full-time",
        accreditation: "NAAC A++",
        affiliation: "SRM Institute of Science and Technology",
        scholarships: "Merit, sports, and economic background based",
        averagePackage: "₹6.0 LPA",
        topRecruiters: ["Amazon", "TCS", "Capgemini", "Infosys", "HCL"],
        facilities: ["AC Hostels", "Smart Classrooms", "Labs", "Cafeteria"],
        studentReviews: "Campus is huge and placements are decent."
      },
      {
        name: "MLR Institute of Technology (MLRIT)",
        location: "Hyderabad",
        rating: 4.0,
        cutoff: "EAMCET: 12000",
        fee: "₹1,05,000/year",
        courses: ["CSE", "ECE", "IT", "AIML", "Cyber Security"],
        desc: "Autonomous institute known for its discipline, placement record, and industry collaborations.",
        moreInfoLink: "https://mlrit.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A+",
        affiliation: "JNTU Hyderabad",
        scholarships: "EAMCET-based fee reimbursement, merit scholarships",
        averagePackage: "₹5.5 LPA",
        topRecruiters: ["Capgemini", "TCS", "Amazon", "Cognizant"],
        facilities: ["Digital Library", "Innovation Center", "Sports", "Hostels"],
        studentReviews: "Great discipline, regular classes, and good placements."
      },
      {
        name: "Malla Reddy College of Engineering and Technology",
        location: "Hyderabad",
        rating: 3.9,
        cutoff: "EAMCET: 14000",
        fee: "₹1,00,000/year",
        courses: ["CSE", "ECE", "IT", "EEE"],
        desc: "Part of Malla Reddy group, offers modern infrastructure and decent campus recruitment.",
        moreInfoLink: "https://mrcet.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A",
        affiliation: "JNTU Hyderabad",
        scholarships: "Government and private scholarships available",
        averagePackage: "₹4.2 LPA",
        topRecruiters: ["TCS", "Infosys", "Tech Mahindra"],
        facilities: ["Labs", "Transport", "Hostels", "Canteens"],
        studentReviews: "Infrastructure and opportunities are good, but more focus needed on core jobs."
      },
      {
        name: "St. Martin's Engineering College",
        location: "Hyderabad",
        rating: 4.0,
        cutoff: "EAMCET: 15000",
        fee: "₹1,00,000/year",
        courses: ["CSE", "ECE", "AIML", "IT"],
        desc: "Autonomous college with consistent placements and value-added programs.",
        moreInfoLink: "https://smec.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A+",
        affiliation: "JNTU Hyderabad",
        scholarships: "Fee reimbursement and academic scholarships",
        averagePackage: "₹4.5 LPA",
        topRecruiters: ["Wipro", "Cognizant", "Virtusa"],
        facilities: ["Wi-Fi Campus", "R&D Labs", "Auditorium", "Sports"],
        studentReviews: "Faculty support and placements are highlights."
      },
      {
        name: "CMR College of Engineering & Technology",
        location: "Hyderabad",
        rating: 4.1,
        cutoff: "EAMCET: 8000",
        fee: "₹1,10,000/year",
        courses: ["CSE", "IT", "ECE", "AI&ML"],
        desc: "Popular for tech events and industry collaborations with strong placement cell.",
        moreInfoLink: "https://cmrcet.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A+",
        affiliation: "JNTU Hyderabad",
        scholarships: "Merit-based and state scholarships",
        averagePackage: "₹5.2 LPA",
        topRecruiters: ["Infosys", "Cognizant", "Amazon"],
        facilities: ["Tech Labs", "Startup Incubator", "Sports Complex"],
        studentReviews: "Campus is great and offers good growth if you're proactive."
      },      
      {
        name: "SASTRA University",
        location: "Thanjavur",
        rating: 4.0,
        cutoff: "JEE Main: 95 percentile",
        fee: "₹1,20,000/year",
        courses: ["CSE", "ECE", "EEE", "Civil"],
        desc: "Combines technical rigor with cultural values, popular among students for discipline and academics.",
        moreInfoLink: "https://www.sastra.edu/",
        duration: "4 years",
        type: "Private (Deemed)",
        mode: "Full-time",
        accreditation: "NAAC A++",
        affiliation: "SASTRA Deemed University",
        scholarships: "Scholarships for meritorious and economically weak students",
        averagePackage: "₹5.8 LPA",
        topRecruiters: ["Zoho", "TCS", "HCL", "Tech Mahindra"],
        facilities: ["Library", "Wi-Fi", "Labs", "Auditoriums", "Hostels"],
        studentReviews: "Academically strong with discipline-focused environment."
      },
      {
        name: "PES University",
        location: "Bengaluru",
        rating: 4.3,
        cutoff: "PESSAT: 800",
        fee: "₹2,80,000/year",
        courses: ["CSE", "AI", "EEE", "ECE"],
        desc: "Bangalore-based university known for strong coding culture and high-tech labs.",
        moreInfoLink: "https://pes.edu/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A+",
        affiliation: "PES University",
        scholarships: "Merit scholarships based on PESSAT rank",
        averagePackage: "₹7.1 LPA",
        topRecruiters: ["Amazon", "Adobe", "Infosys", "Bosch", "TCS"],
        facilities: ["Smart Classrooms", "Coding Labs", "Cafeteria", "Hostels", "Sports Complex"],
        studentReviews: "Excellent tech culture and project-based learning."
      },
      {
        name: "Manipal Institute of Technology",
        location: "Manipal",
        rating: 4.4,
        cutoff: "MET: 2500",
        fee: "₹3,30,000/year",
        courses: ["CSE", "IT", "ECE", "Mechatronics"],
        desc: "A globally recognized private institute offering vast international opportunities.",
        moreInfoLink: "https://manipal.edu/mit.html",
        duration: "4 years",
        type: "Private (Deemed)",
        mode: "Full-time",
        accreditation: "NAAC A+",
        affiliation: "Manipal Academy of Higher Education",
        scholarships: "Merit-cum-means and international scholarships available",
        averagePackage: "₹7.5 LPA",
        topRecruiters: ["Microsoft", "Bosch", "Philips", "Cognizant"],
        facilities: ["Hostels", "Research Labs", "Innovation Centers", "Sports Arena"],
        studentReviews: "Top-notch campus and peer group, wide exposure."
      },
      {
        name: "IIIT Hyderabad",
        location: "Hyderabad",
        rating: 4.8,
        cutoff: "JEE Advanced: 1000",
        fee: "₹3,00,000/year",
        courses: ["CSE", "ECE", "AI", "Computational Linguistics"],
        desc: "Top-rated for computer science, known for research-oriented curriculum and elite placements.",
        moreInfoLink: "https://www.iiit.ac.in/",
        duration: "4 years",
        type: "Autonomous",
        mode: "Full-time",
        accreditation: "UGC Autonomous",
        affiliation: "IIIT Hyderabad",
        scholarships: "Limited merit-based scholarships and financial assistance",
        averagePackage: "₹21.0 LPA",
        topRecruiters: ["Google", "Facebook", "Microsoft", "Amazon", "Uber"],
        facilities: ["Research Centers", "Startup Incubator", "Tech Labs", "Hostels"],
        studentReviews: "Intense academics, unmatched research and placement."
      },
      {
        name: "JNTU Hyderabad",
        location: "Hyderabad",
        rating: 4.0,
        cutoff: "EAMCET: 3000",
        fee: "₹65,000/year",
        courses: ["CSE", "ECE", "Mechanical", "IT"],
        desc: "One of the top government universities in Telangana, known for affordable education and solid placement records.",
        moreInfoLink: "https://jntuh.ac.in/",
        duration: "4 years",
        type: "Public",
        mode: "Full-time",
        accreditation: "NAAC A",
        affiliation: "Jawaharlal Nehru Technological University",
        scholarships: "Government scholarships and fee reimbursement schemes",
        averagePackage: "₹5.0 LPA",
        topRecruiters: ["Infosys", "TCS", "Wipro", "Tech Mahindra"],
        facilities: ["Library", "Labs", "Workshops", "Auditorium", "Sports"],
        studentReviews: "Affordable, prestigious, and job-oriented education."
      },
      {
        name: "VNR VJIET",
        location: "Hyderabad",
        rating: 4.1,
        cutoff: "EAMCET: 5000",
        fee: "₹1,35,000/year",
        courses: ["CSE", "ECE", "IT", "AI&DS"],
        desc: "Autonomous institute with NAAC 'A++' grade, recognized for academic excellence and industry-aligned curriculum.",
        moreInfoLink: "https://vnrvjiet.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A++",
        affiliation: "JNTU Hyderabad",
        scholarships: "Merit-based and government scholarships available",
        averagePackage: "₹6.0 LPA",
        topRecruiters: ["Deloitte", "TCS", "Accenture", "Infosys", "Virtusa"],
        facilities: ["Innovation Labs", "Wi-Fi Campus", "Library", "Hostels"],
        studentReviews: "Best balance of academics and co-curricular activities."
      },
      {
        name: "CBIT",
        location: "Hyderabad",
        rating: 4.2,
        cutoff: "EAMCET: 4500",
        fee: "₹1,40,000/year",
        courses: ["CSE", "IT", "ECE", "EEE"],
        desc: "One of the oldest and most reputed private engineering colleges in Telangana with strong alumni network.",
        moreInfoLink: "https://www.cbit.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A++",
        affiliation: "Osmania University",
        scholarships: "State government schemes and college-level incentives",
        averagePackage: "₹6.5 LPA",
        topRecruiters: ["Capgemini", "Oracle", "Infosys", "TCS", "Cyient"],
        facilities: ["Labs", "Workshops", "Auditorium", "Library", "Hostels"],
        studentReviews: "Oldest private engineering college with consistent placement records."
      },
      {
        name: "KL University",
        location: "Vijayawada",
        rating: 4.1,
        cutoff: "KLEEE: 20,000",
        fee: "₹2,00,000/year",
        courses: ["CSE", "AI", "Mech", "ECE"],
        desc: "A deemed university offering flexible learning and innovative teaching methodologies with good placement support.",
        moreInfoLink: "https://www.kluniversity.in/",
        duration: "4 years",
        type: "Private (Deemed)",
        mode: "Full-time",
        accreditation: "NAAC A++",
        affiliation: "KL Deemed to be University",
        scholarships: "Merit scholarships based on KLEEE and board marks",
        averagePackage: "₹5.5 LPA",
        topRecruiters: ["TCS", "Wipro", "Cognizant", "Infosys", "IBM"],
        facilities: ["Digital Classrooms", "Innovation Hubs", "Labs", "Hostels", "Cafeteria"],
        studentReviews: "Strong placement support and modern learning environment."
      },
      {
        name: "SRKR Engineering College",
        location: "Bhimavaram",
        rating: 4.0,
        cutoff: "EAMCET: 7000",
        fee: "₹85,000/year",
        courses: ["CSE", "ECE", "IT", "Civil"],
        desc: "Affiliated to JNTU Kakinada, known for strong faculty and consistent academic results in Andhra Pradesh.",
        moreInfoLink: "https://www.srkrec.edu.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A++",
        affiliation: "JNTU Kakinada",
        scholarships: "AP government schemes and institutional aid",
        averagePackage: "₹4.5 LPA",
        topRecruiters: ["Infosys", "Wipro", "Tech Mahindra", "Virtusa"],
        facilities: ["Labs", "Central Library", "Wi-Fi Campus", "Sports Facilities"],
        studentReviews: "Good academic environment and faculty guidance."
      },{
        name: "PVR VITS",
        location: "Kavali",
        rating: 3.8,
        cutoff: "EAMCET: 22000",
        fee: "₹65,000/year",
        courses: ["CSE", "ECE", "EEE", "Mechanical"],
        desc: "A reputed institute in coastal Andhra with good faculty and improving placements.",
        moreInfoLink: "https://pvrit.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NBA, NAAC B+",
        affiliation: "JNTU Anantapur",
        scholarships: "Fee reimbursement and SC/ST/OBC scholarships",
        averagePackage: "₹3.8 LPA",
        topRecruiters: ["Infosys", "Wipro", "TCS"],
        facilities: ["Hostels", "Library", "Workshops", "Sports"],
        studentReviews: "Good for academics, especially if self-driven."
      },
      {
        name: "Mohan Babu University (MBU)",
        location: "Tirupati",
        rating: 4.2,
        cutoff: "Merit + Entrance",
        fee: "₹1,75,000/year",
        courses: ["CSE", "AI", "ECE", "Mechanical"],
        desc: "Deemed university founded by actor Mohan Babu, focused on innovation and placements.",
        moreInfoLink: "https://mbu.asia/",
        duration: "4 years",
        type: "Private (Deemed)",
        mode: "Full-time",
        accreditation: "UGC, AICTE approved",
        affiliation: "Autonomous",
        scholarships: "Merit scholarships, Mohan Babu educational grants",
        averagePackage: "₹6.5 LPA",
        topRecruiters: ["IBM", "TCS", "Amazon", "Zoho"],
        facilities: ["Innovation Hub", "Labs", "Theatre-style Classrooms", "Sports Arena"],
        studentReviews: "Modern campus with high-quality training and exposure."
      },      
      {
        name: "Gayatri Vidya Parishad College of Engineering (Autonomous)",
        location: "Visakhapatnam",
        rating: 4.2,
        cutoff: "EAMCET: 7000",
        fee: "₹96,000/year",
        courses: ["CSE", "ECE", "IT", "Mechanical", "Civil"],
        desc: "One of the top engineering colleges in Vizag with strong alumni and placement support.",
        moreInfoLink: "https://www.gvpce.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A++, NBA",
        affiliation: "JNTU Kakinada",
        scholarships: "Andhra Pradesh state scholarships, merit scholarships",
        averagePackage: "₹5.5 LPA",
        topRecruiters: ["TCS", "Wipro", "Infosys", "Tech Mahindra"],
        facilities: ["Central Library", "Auditorium", "Sports", "Labs"],
        studentReviews: "Strong technical culture and placements."
      },
      {
        name: "Velagapudi Ramakrishna Siddhartha Engineering College (VRSEC)",
        location: "Vijayawada",
        rating: 4.1,
        cutoff: "EAMCET: 10000",
        fee: "₹1,10,000/year",
        courses: ["CSE", "IT", "ECE", "EEE", "Civil"],
        desc: "Autonomous institution with a strong emphasis on discipline and academics.",
        moreInfoLink: "https://www.vrsiddhartha.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A+, NBA",
        affiliation: "JNTU Kakinada",
        scholarships: "Government and private scholarships",
        averagePackage: "₹5.0 LPA",
        topRecruiters: ["Infosys", "Cognizant", "Virtusa"],
        facilities: ["Wi-Fi Campus", "Digital Classrooms", "Library"],
        studentReviews: "Academics-focused with consistent placement support."
      },
      {
        name: "Sri Vasavi Engineering College",
        location: "Tadepalligudem",
        rating: 4.0,
        cutoff: "EAMCET: 15000",
        fee: "₹75,000/year",
        courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil"],
        desc: "Popular in West Godavari for affordable education and good teaching.",
        moreInfoLink: "https://srivasaviengg.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A, NBA",
        affiliation: "JNTU Kakinada",
        scholarships: "AP fee reimbursement, scholarships for SC/ST/OBC",
        averagePackage: "₹3.5 LPA",
        topRecruiters: ["Wipro", "Capgemini", "Hexaware"],
        facilities: ["Library", "Workshops", "Cultural Halls", "Cafeteria"],
        studentReviews: "Supportive faculty and decent placement record."
      },
      {
        name: "RVR & JC College of Engineering",
        location: "Guntur",
        rating: 4.3,
        cutoff: "EAMCET: 6000",
        fee: "₹1,08,000/year",
        courses: ["CSE", "ECE", "IT", "Mechanical", "Civil"],
        desc: "Highly reputed in AP for consistent academic results and campus placements.",
        moreInfoLink: "https://www.rvrjcce.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A++, NBA",
        affiliation: "JNTU Kakinada",
        scholarships: "Merit-based and government schemes",
        averagePackage: "₹5.8 LPA",
        topRecruiters: ["TCS", "Infosys", "Accenture", "Virtusa"],
        facilities: ["Hostels", "Library", "Tech Fests", "Labs"],
        studentReviews: "Great reputation and strong career opportunities."
      },
      {
        name: "ANITS (Anil Neerukonda Institute of Technology and Sciences)",
        location: "Visakhapatnam",
        rating: 4.0,
        cutoff: "EAMCET: 8000",
        fee: "₹1,00,000/year",
        courses: ["CSE", "ECE", "IT", "AI&ML"],
        desc: "Popular among Vizag students for its placements and industry interaction.",
        moreInfoLink: "https://anits.edu.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A, NBA",
        affiliation: "AU, Autonomous",
        scholarships: "State and central government scholarships",
        averagePackage: "₹4.5 LPA",
        topRecruiters: ["Infosys", "Hexaware", "Wipro"],
        facilities: ["Smart Classrooms", "Labs", "Canteens", "Playgrounds"],
        studentReviews: "Balanced academics and a decent industry connection."
      },
      {
        name: "Pragati Engineering College",
        location: "Surampalem, East Godavari",
        rating: 4.0,
        cutoff: "EAMCET: 16000",
        fee: "₹80,000/year",
        courses: ["CSE", "ECE", "EEE", "Mechanical"],
        desc: "Emerging private engineering college with a focus on industry-ready training.",
        moreInfoLink: "https://pragati.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NBA, NAAC A",
        affiliation: "JNTU Kakinada",
        scholarships: "EAMCET-based, SC/ST/OBC scholarships",
        averagePackage: "₹3.6 LPA",
        topRecruiters: ["TCS", "Wipro", "Infosys"],
        facilities: ["Labs", "Auditoriums", "Seminar Halls"],
        studentReviews: "Upcoming institute with good teaching staff."
      },
      {
        name: "GITAM School of Technology",
        location: "Visakhapatnam",
        rating: 4.4,
        cutoff: "GAT/Direct Admission",
        fee: "₹2,50,000/year",
        courses: ["CSE", "ECE", "Cyber Security", "AI"],
        desc: "Part of GITAM deemed university, known for infrastructure and placements.",
        moreInfoLink: "https://gitam.edu/",
        duration: "4 years",
        type: "Private (Deemed)",
        mode: "Full-time",
        accreditation: "NAAC A+",
        affiliation: "Autonomous",
        scholarships: "Merit scholarships, sports scholarships",
        averagePackage: "₹6.0 LPA",
        topRecruiters: ["Amazon", "Deloitte", "TCS", "Capgemini"],
        facilities: ["Wi-Fi Campus", "Labs", "Gym", "Hostels"],
        studentReviews: "Great exposure and modern learning environment."
      },
      {
        name: "SRKR Engineering College",
        location: "Bhimavaram",
        rating: 4.2,
        cutoff: "EAMCET: 9000",
        fee: "₹85,000/year",
        courses: ["CSE", "IT", "ECE", "EEE"],
        desc: "Well-established college in West Godavari with good academic track record.",
        moreInfoLink: "https://srkrec.edu.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A+, NBA",
        affiliation: "JNTU Kakinada",
        scholarships: "AP government scholarships and fee waivers",
        averagePackage: "₹4.8 LPA",
        topRecruiters: ["Infosys", "Hexaware", "Virtusa"],
        facilities: ["Library", "Auditorium", "Labs", "Cafeteria"],
        studentReviews: "Excellent for technical knowledge and discipline."
      },
      {
        name: "Sagi Ramakrishnam Raju Engineering College (SRR)",
        location: "Bhimavaram",
        rating: 4.0,
        cutoff: "EAMCET: 13000",
        fee: "₹78,000/year",
        courses: ["CSE", "ECE", "EEE", "Mechanical"],
        desc: "Popular in rural Andhra Pradesh with affordable education and growing industry links.",
        moreInfoLink: "https://srrenggcollege.ac.in/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NBA, NAAC B++",
        affiliation: "JNTU Kakinada",
        scholarships: "Fee reimbursement and minority scholarships",
        averagePackage: "₹3.4 LPA",
        topRecruiters: ["Infosys", "Wipro", "TCS"],
        facilities: ["Hostels", "Cafeteria", "Seminar Halls"],
        studentReviews: "Affordable and good for rural students aiming for placements."
      },
      {
        name: "Vasireddy Venkatadri Institute of Technology (VVIT)",
        location: "Guntur",
        rating: 4.3,
        cutoff: "EAMCET: 9000",
        fee: "₹95,000/year",
        courses: ["CSE", "IT", "ECE", "AI&DS"],
        desc: "Fast-growing autonomous college with strong tech and cultural ecosystem.",
        moreInfoLink: "https://vvitguntur.com/",
        duration: "4 years",
        type: "Private",
        mode: "Full-time",
        accreditation: "NAAC A+, NBA",
        affiliation: "JNTU Kakinada",
        scholarships: "Merit and EAMCET-based government aid",
        averagePackage: "₹5.3 LPA",
        topRecruiters: ["TCS", "Cognizant", "Capgemini", "Wipro"],
        facilities: ["Startup Lab", "Amphitheatre", "Sports Complex"],
        studentReviews: "Strong culture, fests, and placement ecosystem."
      }      
  ];
  
  // DOM Elements
  const searchInput = document.getElementById("searchInput");
  const locationFilter = document.getElementById("locationFilter");
  const ratingFilter = document.getElementById("ratingFilter");
  const facilitiesFilter = document.getElementById("facilitiesFilter");
  const clearFiltersBtn = document.getElementById("clearFiltersBtn");
  const container = document.getElementById("collegeContainer");
  
  // Render colleges in the container
  function renderColleges(data, container) {
    container.innerHTML = ""; // Clear existing content
    if (data.length === 0) {
        container.innerHTML = "<p>No colleges found.</p>";
        return;
    }
  
    data.forEach(college => {
        const card = document.createElement("div");
        card.className = "college-card";
        card.id = `college-${college.name.replace(/\s+/g, "-").toLowerCase()}`; // Unique ID for each card
        card.innerHTML = `
            <h3 class="college-name">${college.name}</h3>
            <p class="college-location">📍 ${college.location}</p>
            <p class="college-rating">⭐ Rating: ${college.rating}</p>
            <p class="college-cutoff">📊 Cutoff: ${college.cutoff}</p>
            <div class="buttons">
                <button class="apply-btn" onclick="applyNow('${college.name}')">Apply Now</button>
                <button class="wishlist-btn" onclick="toggleWishlist('${card.id}')">❤️ Save to Wishlist</button>
            </div>
        `;
        card.addEventListener("click", () => showCollegeDetails(college)); // Attach click event
        container.appendChild(card);
    });
  }
  
  // Render colleges by category
  function renderCollegesByCategory() {
    const featuredContainer = document.querySelector("#services .college-grid");
    const topRatedContainer = document.querySelector("#topRatedColleges .college-grid");
    const eamcetContainer = document.querySelector("#eamcetColleges .college-grid");
  
    const featuredColleges = colleges.slice(0, 3); // Example: First 3 colleges as featured
    const topRatedColleges = colleges.filter(college => college.rating >= 4.5);
    const eamcetColleges = colleges.filter(college => college.cutoff.includes("EAMCET"));
  
    renderColleges(featuredColleges, featuredContainer);
    renderColleges(topRatedColleges, topRatedContainer);
    renderColleges(eamcetColleges, eamcetContainer);
  }
  renderCollegesByCategory();
  
  
  // Show college details in a modal
  function showCollegeDetails(college) {
    const modal = document.getElementById("collegeDetailsModal");
  
    modal.querySelector("#modalCollegeName").textContent = `🎓 ${college.name}`;
    modal.querySelector("#modalCollegeLocation").innerHTML = `📍 <strong>Location:</strong> ${college.location}`;
    modal.querySelector("#modalCollegeRating").innerHTML = `⭐ <strong>Rating:</strong> ${college.rating}`;
    modal.querySelector("#modalCollegeCutoff").innerHTML = `📊 <strong>Cutoff:</strong> ${college.cutoff}`;
    modal.querySelector("#modalCollegeFee").innerHTML = `💰 <strong>Fee:</strong> ${college.fee}`;
    modal.querySelector("#modalCollegeCourses").innerHTML = `📚 <strong>Courses:</strong> ${college.courses.join(", ")}`;
    modal.querySelector("#modalCollegeDuration").innerHTML = `⏳ <strong>Duration:</strong> ${college.duration}`;
    modal.querySelector("#modalCollegeType").innerHTML = `🏫 <strong>Type:</strong> ${college.type}`;
    modal.querySelector("#modalCollegeMode").innerHTML = `🕒 <strong>Mode:</strong> ${college.mode}`;
    modal.querySelector("#modalCollegeAccreditation").innerHTML = `📜 <strong>Accreditation:</strong> ${college.accreditation}`;
    modal.querySelector("#modalCollegeAffiliation").innerHTML = `🤝 <strong>Affiliation:</strong> ${college.affiliation}`;
    modal.querySelector("#modalCollegeScholarships").innerHTML = `🎓 <strong>Scholarships:</strong> ${college.scholarships}`;
    modal.querySelector("#modalCollegeAveragePackage").innerHTML = `💼 <strong>Average Package:</strong> ${college.averagePackage}`;
    modal.querySelector("#modalCollegeTopRecruiters").innerHTML = `🏢 <strong>Top Recruiters:</strong> ${college.topRecruiters.join(", ")}`;
    modal.querySelector("#modalCollegeFacilities").innerHTML = `🏠 <strong>Facilities:</strong> ${college.facilities.join(", ")}`;
    modal.querySelector("#modalCollegeStudentReviews").innerHTML = `🗣️ <strong>Student Reviews:</strong> ${college.studentReviews}`;
    modal.querySelector("#modalCollegeLink").href = college.moreInfoLink;
  
    const wishlistButton = modal.querySelector("#wishlistButton");
    wishlistButton.setAttribute("data-college-id", `college-${college.name.replace(/\s+/g, "-").toLowerCase()}`);
  
    modal.classList.remove("hidden");
  }
  
  // Close the college details modal
  function closeCollegeDetails() {
    const modal = document.getElementById("collegeDetailsModal");
    modal.classList.add("hidden");
  }
  
  // Toggle wishlist functionality
  function toggleWishlist(id) {
    let savedList = JSON.parse(localStorage.getItem("wishlist")) || [];
  
    if (savedList.includes(id)) {
        savedList = savedList.filter(item => item !== id);
    } else {
        savedList.push(id);
        showPopupMessage("College saved to your Wishlist!");
    }
  
    localStorage.setItem("wishlist", JSON.stringify(savedList));
  }
  
  // Show popup message
  function showPopupMessage(message) {
    const popup = document.createElement("div");
    popup.className = "popup-message";
    popup.textContent = message;
  
    document.body.appendChild(popup);
  
    setTimeout(() => {
        popup.remove();
    }, 3000);
  }
  
  // Show wishlisted colleges in a modal
  function showWishlistedColleges() {
    const modal = document.getElementById("wishlistedCollegesModal");
    const list = document.getElementById("wishlistedCollegesList");
    list.innerHTML = ""; // Clear the list
  
    const savedList = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (savedList.length === 0) {
        list.innerHTML = "<li>No colleges in your wishlist.</li>";
    } else {
        savedList.forEach(id => {
            const collegeCard = document.getElementById(id);
            if (collegeCard) {
                const collegeName = collegeCard.querySelector(".college-name").textContent;
                const listItem = document.createElement("li");
                listItem.textContent = collegeName;
                list.appendChild(listItem);
            }
        });
    }
  
    modal.classList.remove("hidden");
  }
  
  // Close the wishlist modal
  function closeWishlistedCollegesModal() {
    const modal = document.getElementById("wishlistedCollegesModal");
    modal.classList.add("hidden");
  }
  
  // Filter colleges based on search, location, rating, and facilities
  function filterColleges() {
    const search = searchInput.value.toLowerCase();
    const location = locationFilter.value;
    const rating = parseFloat(ratingFilter.value);
    const facility = facilitiesFilter.value;
  
    const filtered = colleges.filter(college => {
        const matchesSearch = college.name.toLowerCase().includes(search);
        const matchesLocation = !location || college.location === location;
        const matchesRating = !rating || college.rating >= rating;
        const matchesFacility = !facility || college.facilities.includes(facility);
  
        return matchesSearch && matchesLocation && matchesRating && matchesFacility;
    });
  
    renderColleges(filtered, container);
  }
  
  // Clear all filters
  function clearFilters() {
    searchInput.value = "";
    locationFilter.value = "";
    ratingFilter.value = "";
    facilitiesFilter.value = "";
    renderColleges(colleges, container);
  }
  
  
  // Add this code after all existing functions
  function applyNow(collegeName) {
   alert(`Redirecting to application form for ${collegeName}...`);
   // Placeholder for redirection or modal logic
  }
  
  // Initial render
  renderCollegesByCategory();
  
  // Event listeners
  searchInput.addEventListener("input", filterColleges);
  locationFilter.addEventListener("change", filterColleges);
  ratingFilter.addEventListener("change", filterColleges);
  facilitiesFilter.addEventListener("change", filterColleges);
  clearFiltersBtn.addEventListener("click", clearFilters);
  
  
  // Open User Info Modal
  document.getElementById('userProfileBtn').addEventListener('click', function () {
    document.getElementById('userInfoModal').classList.remove('hidden');
  });
  
  // Add closeUserInfoModal here
  function closeUserInfoModal() {
   document.getElementById('userInfoModal').classList.add('hidden');
  }