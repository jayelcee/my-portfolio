export const certificates = [
  {
    title: "DevNet Associate",
    issuer: "Cisco",
    date: "Jan 17, 2024",
    credentialId: "DevNet Associate",
    link: "https://www.credly.com/badges/f4c9e77e-14b0-4939-b889-bac0960f8360/public_url",
    skills: ["Network Infrastructure", "APIs", "Python", "DevOps"],
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Jul 29, 2023",
    credentialId: "CCNA ITN",
    link: "https://www.credly.com/badges/2c4c2adf-a3b9-4fd3-9f8b-d7175e3b6d40/public_url",
    skills: ["Networking", "IPv4 and IPv6 Addressing", "IP Subnetting", "Network Security"],
  },
  {
    title: "IT Specialist - Python",
    issuer: "Certiport - A Pearson VUE Business",
    date: "Jun 25, 2023",
    credentialId: "IT Specialist Python",
    link: "https://www.credly.com/badges/c5131e24-eea9-402f-8850-69960fd691a5/public_url",
    skills: ["Python Programming", "Data Structures", "Object-Oriented Programming"],
  },
  {
    title: "IT Specialist - Java",
    issuer: "Certiport - A Pearson VUE Business",
    date: "Nov 25, 2022",
    credentialId: "IT Specialist Java",
    link: "https://www.credly.com/badges/72ec69eb-f406-4d72-b110-fb2fb28ce3e4/public_url",
    skills: ["Java Programming", "Object-Oriented Programming", "Software Development"],
  },
];

export type Certificate = typeof certificates[0];
