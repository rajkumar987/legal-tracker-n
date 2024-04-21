export const ReportData = [
  {
    id: 1,
    court_name: "Supreme Court",
    case_number: "WP/9403/2024",
    date_of_filing: "12/05/2023",
    department: "Vehicle Caught",
    advocate: "Rajkumar",
    status: "Awaited",
  },
  {
    id: 2,
    court_name: "High Court",
    case_number: "CC/1298/2023",
    date_of_filing: "05/18/2023",
    department: "Encroachment on forest land",
    advocate: "Rakesh",
    status: "Submitted",
  },
  {
    id: 3,
    court_name: "Lower Court",
    case_number: "SLP/7632/2024",
    date_of_filing: "07/30/2023",
    department: "Illegal felling of trees",
    advocate: "Rajkumar",
    status: "Approval",
  },
  {
    id: 4,
    court_name: "City Civil Court",
    case_number: "WA/2874/2023",
    date_of_filing: "11/12/2023",
    department: "Vehicle Caught",
    advocate: "Ramesh",
    status: "Submitted",
  },
  {
    id: 5,
    court_name: "Government Pleader",
    case_number: "WP/5219/2023",
    date_of_filing: "09/02/2023",
    department: "Encroachment on forest land",
    advocate: "Rakesh",
    status: "Not Submitted",
  },
  {
    id: 6,
    court_name: "Lokayuktha",
    case_number: "CC/1943/2024",
    date_of_filing: "04/16/2023",
    department: "Illegal felling of trees",
    advocate: "Ramesh",
    status: "Approval",
  },
  {
    id: 7,
    court_name: "NGT",
    case_number: "SLP/6320/2024",
    date_of_filing: "10/22/2023",
    department: "Vehicle Caught",
    advocate: "Rajkumar",
    status: "Awaited",
  },
  {
    id: 8,
    court_name: "APIT",
    case_number: "WA/8417/2023",
    date_of_filing: "06/08/2023",
    department: "Encroachment on forest land",
    advocate: "Rakesh",
    status: "Approval",
  },
  {
    id: 9,
    court_name: "LGC",
    case_number: "CC/3847/2024",
    date_of_filing: "08/13/2023",
    department: "Illegal felling of trees",
    advocate: "Rajkumar",
    status: "Submitted",
  },
  {
    id: 10,
    court_name: "NCLT",
    case_number: "WP/7326/2024",
    date_of_filing: "03/29/2023",
    department: "Vehicle Caught",
    advocate: "Ramesh",
    status: "Awaited",
  },
];

export const CourtNames = [
  { name: "Supreme Court", value: "supreme_court" },
  { name: "High Court", value: "high_court" },
  { name: " Civil Court", value: "civil_court" },
  { name: "NGT", value: "ngt" },
  { name: "Lokayuktha", value: "lokayuktha" },
  { name: "HRC", value: "hrc" },
  { name: "NHRC", value: "nhrc" },
  { name: "ARBITRATION", value: "arbitration" },
  { name: "CONSUMER COURT", value: "consumer_court" },
];

export const Departments = [
  {
    name: "Budha Purnima Project",
    value: "budha_purnima_project",
  },
  {
    name: "Outer Ring Road Project",
    value: "outer_ring_road_project",
  },
];

export const Advocates = [
  {
    name: "Rajkumar",
    value: "rajkumar",
  },
  {
    name: "Rakesh",
    value: "rakesh",
  },
  {
    name: "Ramesh",
    value: "ramesh",
  },
];

export const DepartmentSpecifics = [
  {
    name: "Vehicle Caught",
    value: "vehicle_caught",
  },
  {
    name: "Encroachment on forest land",
    value: "encroachment_on_forest_land",
  },
  {
    name: "Illegal felling of trees",
    value: "illegal_tree_cutting",
  },
];

export const CaseTypes = [
  { name: "SPECIAL LEAVE PETITION", value: "SLP" },
  { name: "WRIT PETITION", value: "WP" },
  { name: "WRIT APPEAL", value: "WA" },
  { name: "ORIGINAL SUIT", value: "OS" },
  { name: "CIVIL REVISION PETITION", value: "CRP" },
  { name: "CONTEMPT CASE", value: "CA" },
  { name: "CIVIL MISCELLANEOUS APPEAL", value: "CMA" },
  { name: "SECOND APPEAL", value: "SA" },
  { name: "PUBLIC INTEREST LITIGATION", value: "PIL" },
  { name: "APPEAL", value: "AS" },
  { name: "CITY CIVIL COURT APPEAL", value: "CCCA" },
  { name: "ELECTION PETITION", value: "EP" },
  { name: "ORIGINAL APPEAL", value: "OA" },
  { name: "ORIGINAL PETITION", value: "OP" },
  { name: "HRC", value: "HRC" },
  { name: "LOKAYUKTA", value: "LKA" },
  { name: "NHRC", value: "NHRC" },
  { name: "NGT", value: "NGT" },
  { name: "MUNICIPAL APPEAL", value: "MA" },
  { name: "ARBTR", value: "ARBTR" },
  {
    name: "CIVIL MISCELLANEOUS SECOND APPEAL",
    value: "civil_miscellaneous_second_appeal",
  },
  { name: "ELECTION ORIGINAL PETITION", value: "election_original_petition" },
  { name: "EXECUTION PETITION", value: "execution_petition" },
  { name: "IA/ORIGINAL SUIT", value: "ia/original_suit" },
  { name: "WRIT PETITION TRANSFERED", value: "writ_petition_transfered" },
  { name: "CRIMINAL PETITION", value: "criminal_petition" },
  {
    name: "APPL(APPLICATION IN CIVIL SUIT)",
    value: "appl(application_in_civil_suit)",
  },
  { name: "TUPWP-PIL", value: "tupwp-pil" },
  { name: "SUOMOTU WP(PIL)", value: "suomotu_wp(pil)" },
  { name: "CONSUMER NO", value: "consumer_no" },
  { name: "COMMERCIAL COURT APPEAL", value: "commercial_court_appeal" },
  {
    name: "COMMERCIAL ORIGINAL PETITIONS",
    value: "commercial_original_petitions",
  },
  { name: "MACMA", value: "macma" },
];

export const PwrStatuses = [
  {
    name: "Submitted",
    key: "submitted",
  },
  {
    name: "Awaited",
    key: "awaited",
  },
  {
    name: "Approval",
    key: "approval",
  },
  {
    name: "Not Submitted",
    key: "not_submitted",
  },
];

export const CauseList = [
  {
    case_number: "WP/9960/2024",
    res_advoate: "RAMAVARAM CHANDRASHEKAR REDDY",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\n\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/9972/2024",
    res_advoate: "K DURGA PRASAD",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2024(Stay Petition)",
  },
  {
    case_number: "WP/9975/2024",
    res_advoate: "RAJAGOPALLAVAN TAYI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DURGA PRASAD (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/9976/2024",
    res_advoate: "E VENKATA SIDDHARTHA",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/9995/2024",
    res_advoate: "SUBRAHMANYAM KURELLA",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/9997/2024",
    res_advoate: "VADEENDRA JOSHI",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R5)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10007/2024",
    res_advoate: "C HARI PREETH",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10026/2024",
    res_advoate: "L VANI",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nGP FOR HOME (R3)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10028/2024",
    res_advoate: "RAMAVARAM CHANDRASHEKAR REDDY",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R3)\n\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/10030/2024",
    res_advoate: "LINGAMPELLY RAVINDER",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10048/2024",
    res_advoate: "C HARI PREETH",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10060/2024",
    res_advoate: "GOVARDHAN REDDY JOUNDLA",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10066/2024",
    res_advoate: "GOVARDHAN REDDY JOUNDLA",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10086/2024",
    res_advoate: "MAMIDI VENU MADHAV",
    pet_advocate: "GP FOR HOUSING\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10094/2024",
    res_advoate: "SHAIKH CHAND AHMED",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10095/2024",
    res_advoate: "T BALA MOHAN REDDY",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "WARANGAL",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/10098/2024",
    res_advoate: "SHREYAS REDDY YALAGIRI",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/10126/2024",
    res_advoate: "K RAMA SUBBA RAO",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10166/2024",
    res_advoate: "MAYUR MUNDRA",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10174/2024",
    res_advoate: "PULIMAMIDI SHASHIDHAR REDDY",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "HANUMAKONDA",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/10217/2024",
    res_advoate: "MOHD MOIN AHMED QUADRI",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "CRP/1071/2023",
    res_advoate: "V V RAGHAVAN",
    pet_advocate: "SAI PRASEN GUNDAVARAM\nAT 04:00 PM",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "CRP/1109/2023",
    res_advoate: "V V RAGHAVAN",
    pet_advocate: "SAI PRASEN GUNDAVARAM\nAT 04:00 PM",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Stay Petition)",
  },
  {
    case_number: "WP/9959/2024",
    res_advoate: "E VENKATA SIDDHARTHA",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/7750/2024",
    res_advoate: "KARUNAKAR REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DURGA PRASAD (SC FOR GHMC) (R3)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/33367/2023",
    res_advoate: "SATHVIK MAKUNUR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nABDUL AZAM KHAN (R6)\nK SIDDHARTH RAO (R2)\nK SIDDHARTH RAO (R3)\nPRATUSHA BOPPANA (R5)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "WP/5429/2023",
    res_advoate: "SATHVIK MAKUNUR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R2)\nPRATUSHA BOPPANA (R5)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/908/2024",
    res_advoate: "PRATUSHA BOPPANA",
    pet_advocate: "\nSATHVIK MAKUNUR (R4)\nK SIDDHARTH RAO (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/7585/2024",
    res_advoate: "M PRANAV",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nKHAMAR KIRAN KANTAMNENI (R4)\nSATHVIK MAKUNUR (R5)\nK SIDDHARTH RAO (R3)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Stay Petition)",
  },
  {
    case_number: "WP/33833/2023",
    res_advoate: "K BUCHI BABU",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DHANANJAY REDDY (SC FOR GHMC) (R2)\nGP FOR REVENUE (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/3050/2024",
    res_advoate: "G ANANDAM",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/4430/2024",
    res_advoate: "PRABHAKAR CHIKKUDU",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nM A K MUKHEED (SC FOR GHMC) (R4)\nPAPAIAH PEDDAKULA (R7)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/6579/2024",
    res_advoate: "SHASHANK GARIGE",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "WARANGAL",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/6668/2024",
    res_advoate: "KHAJA AIJAZUDDIN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R2)\nPILLIX LAW FIRM (R5)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/8622/2024",
    res_advoate: "PADALA PRAVIN KUMAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nS SURENDER REDDY (SC FOR WARANGAL MUNICIPAL CORP) (R2)\n\n",
    district: "WARANGAL",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/8696/2024",
    res_advoate: "KURITI BHASKARA RAO",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "NIZAMABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/8757/2024",
    res_advoate: "ARRAM SHIVASHANKAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nS SURENDER REDDY (SC FOR WARANGAL MUNICIPAL CORP) (R2)\n\n",
    district: "WARANGAL",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/8777/2024",
    res_advoate: "MOHAMMAD ADNAN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM A K MUKHEED (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/8800/2024",
    res_advoate: "THOMAS LLOYD",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/8857/2024",
    res_advoate: "KADARAM HARIDHAR",
    pet_advocate: "M A K MUKHEED (SC FOR GHMC)\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/8933/2024",
    res_advoate: "GAJANAND CHAKRAVARTHI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nM RAM MOHAN REDDY (SC FOR TSRTC) (R3)\n\n",
    district: "ADILABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/9159/2024",
    res_advoate: "M SALEEM",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DHANANJAY REDDY (SC FOR GHMC) (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/7613/2023",
    res_advoate: "G V SHIVAJI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DURGA PRASAD (SC FOR GHMC) (R2)\nGP FOR REVENUE (R3)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/16113/2010",
    res_advoate: "VIKHAR AHMED",
    pet_advocate: "M DHANANJAY REDDY(SC FOR HUDA)\nAT 04:00 PM",
    district: "RANGA REDDY",
    case_type: "IA 1/2010(WPMP 20287/2010)(Direction Petition)",
  },
  {
    case_number: "WP/16208/2010",
    res_advoate: "K DEVENDER",
    pet_advocate: "D NARSIMULU\nAT 04:00 PM",
    district: "HYDERABAD",
    case_type: "IA 1/2010(WPMP 20422/2010)(Suspension Petition)",
  },
  {
    case_number: "WP/18432/2010",
    res_advoate: "MADDELA RAVINDER",
    pet_advocate:
      "R RADHA KRISHNA REDDY(SC FOR GHMC)\nNAGESH BHEEMAPAKA (R28)\nPASHAM KRISHNA REDDY (R2)\nGP FOR HOME (R27)\n\nAT 04:00 PM",
    district: "HYDERABAD",
    case_type: "IA 1/2010(WPMP 23266/2010)(Direction Petition)",
  },
  {
    case_number: "WP/19453/2010",
    res_advoate: "KOTA SAMEER KUMAR",
    pet_advocate:
      "A DEEPTHI(SC FOR GHMC C15 16 17 18)\nCHATLA MADHU( SC FORGHMC CRL25 30 ) (R4)\n\nAT 04:00 PM",
    district: "HYDERABAD",
    case_type: "IA 1/2010(WPMP 24631/2010)(Stay Petition)",
  },
  {
    case_number: "WP/20480/2010",
    res_advoate: "V VENKATA KUMAR",
    pet_advocate:
      "GP FOR MUNCIPAL ADMN URBAN DEV\nK V BHANU PRASAD (R4)\nM A K MUKHEED (SC FOR GHMC) (R2)\n\nAT 04:00 PM",
    district: "HYDERABAD",
    case_type: "IA 1/2010(WPMP 26037/2010)(Direction Petition)",
  },
  {
    case_number: "WP/21032/2010",
    res_advoate: "SRINIVAS BASAVA",
    pet_advocate: "N ASHOK KUMAR\nB NALIN KUMAR (R27)\n\nAT 04:00 PM",
    district: "HYDERABAD",
    case_type: "IA 1/2010(WPMP 26764/2010)(Direction Petition)",
  },
  {
    case_number: "WP/22214/2010",
    res_advoate: "D NARSIMULU",
    pet_advocate:
      "NAGESH BHEEMAPAKA\nGP FOR MUNCIPAL ADMN URBAN DEV (R61)\nPOTTIGARI SRIDHAR REDDY (R62)\nSAMPATH PRABHAKAR REDDY(SC FORGHMC) (R2)\nPOTTIGARI SRIDHAR REDDY\n\nAT 04:00 PM",
    district: "HYDERABAD",
    case_type: "IA 1/2010(WVMP 4606/2010)(Vacate Stay Petition)",
  },
  {
    case_number: "WP/25076/2010",
    res_advoate: "M V S SURESH KUMAR",
    pet_advocate:
      "SAMPATH PRABHAKAR REDDY(SC FORGHMC)\nMUDDANA KOTESWARA RAO (R66)\n\nAT 04:00 PM",
    district: "RANGA REDDY",
    case_type: "IA 1/2010(WPMP 32057/2010)(Suspension Petition)",
  },
  {
    case_number: "WP/27084/2010",
    res_advoate: "K M MAHENDER REDDY",
    pet_advocate: "PASHAM KRISHNA REDDY\nAT 04:00 PM",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "WP/33143/2010",
    res_advoate: "P RAVI SHANKER",
    pet_advocate: "NAGESH BHEEMAPAKA\nAT 04:00 PM",
    district: "HYDERABAD",
    case_type: "IA 1/2010(WPMP 42076/2010)(Stay Petition)",
  },
  {
    case_number: "WP/33642/2010",
    res_advoate: "MD SALEEM",
    pet_advocate:
      "GP FOR MUNCIPAL ADMN URBAN DEV\nSAMPATH PRABHAKAR REDDY(SC FORGHMC) (R2)\nGP FOR REVENUE (R17)\nR RADHA KRISHNA REDDY(SC FOR GHMC) (R18)\n\nAT 04:00 PM",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "WP/33711/2010",
    res_advoate: "MADDELA RAVINDER",
    pet_advocate:
      "\nGP FOR HOME (R13)\nPASHAM KRISHNA REDDY (R3)\n\nAT 04:00 PM",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CRP/3719/2023",
    res_advoate: "KONDAPALLI SYAM SUNDER",
    pet_advocate:
      '\nN V ANANTHA KRISHNA (R2)\nN V ANANTHA KRISHNA (R3)\n\nR1 DIED. RR-2&3 APP BY N.V.ANANTHA KRISHNA. R5-RETURNED UNSERVED.\\"NO SUCH PERSON\\" RR9&10-RETURNED UNSERVED.\\"INSUFFICIENT ADDRESS\\"AS PER MEMO FILED VIDE USR NO.24999/24. RR-4,6,7,8 NOTICE SENT, NOT YET RETURNED. PROOF OF SERVICE NOT FILED.',
    district: "KHAMMAM",
    case_type: "IA 1/2023(Stay Petition)",
  },
  {
    case_number: "CRP/3837/2023",
    res_advoate: "KONDAPALLI SYAM SUNDER",
    pet_advocate:
      "\nRR1 & 6 NOTICE SENT, NOT YET RETURNED. PROOF OF SERVICE NOT FILED. RR2, 3, 7 SERVED. RR4 & 5 RETURNED UNSERVED. INSUFFICIENT ADDRESS. MEMO PROOF OF SERVICE FILED ALONG WITH ACKNOWLEDGMENTS AND RETURNED POSTAL COVERS VIDE USR.NO.18724/2024.",
    district: "KHAMMAM",
    case_type: "IA 1/2023(Stay Petition)",
  },
  {
    case_number: "CC/597/2024",
    res_advoate: "BATHININARESH",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/627/2024",
    res_advoate: "M HAREESH KUMAR",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/628/2024",
    res_advoate: "ZEESHAN ADNAN MAHMOOD",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/637/2024",
    res_advoate: "BOKARO SAPNA REDDY",
    pet_advocate: "\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/670/2024",
    res_advoate: "KAVADI NARESH",
    pet_advocate: "\n",
    district: "MAHABUBNAGAR",
    case_type: "",
  },
  {
    case_number: "CC/673/2024",
    res_advoate: "MOHD ANWAR ALI",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/686/2024",
    res_advoate: "M P K ADITYA",
    pet_advocate: "\n",
    district: "PEDDAPALLI",
    case_type: "",
  },
  {
    case_number: "CC/701/2024",
    res_advoate: "L RAM SINGH",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/707/2024",
    res_advoate: "VENKAT REDDY KODUMURY",
    pet_advocate: "\n",
    district: "MANCHERIAL",
    case_type: "",
  },
  {
    case_number: "CC/708/2024",
    res_advoate: "R DHEERAJ SINGH",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/709/2024",
    res_advoate: "M S ANWAR SIDDIQUI",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CRP/1145/2024",
    res_advoate: "ERIGI GANESH",
    pet_advocate: "P DURGA PRASAD\n",
    district: "KHAMMAM",
    case_type: "IA 1/2024(Dispense with Petition)",
  },
  {
    case_number: "CC/90/2023",
    res_advoate: "VADLAKONDA RAVI KUMAR REDDY",
    pet_advocate:
      "\nB JAGAN MADHAVA RAO (R4)\nKIRAN DHARMAPURI (R3)\n\nOrder dt.03.11.2023 R3- Notice served.",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Permission Petition)",
  },
  {
    case_number: "CC/1660/2022",
    res_advoate: "NANDITA GUHA",
    pet_advocate:
      "PRAVEEN KUMAR VEERJALA (SC FOR GHMC)\norder dt : 28/07/2023. R1- Notice served. RR 2 to 4- Notice sent by RPAD not yet returned served.",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Dispense with Petition)",
  },
  {
    case_number: "CC/536/2023",
    res_advoate: "NYAYAPATHI PRASHANT",
    pet_advocate:
      "\nGP FOR REVENUE (R3)\nMOHAMMED OMER FAROOQ (R2)\n\nR4- Notice sent to CJ-City Civil Court, Hyderabad returned unserved (Received after date of hearing) and by RPAD served. RR 5 and 6- Notice served.",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/543/2023",
    res_advoate: "NYAYAPATHI PRASHANT",
    pet_advocate:
      "\nK RAVINDER REDDY (SC FOR GHMC) (R3)\nK RAVINDER REDDY (SC FOR GHMC) (R2)\nK RAVINDER REDDY (SC FOR GHMC) (R4)\n\nRR 1 to 4- Notice served.",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/539/2023",
    res_advoate: "NYAYAPATHI PRASHANT",
    pet_advocate:
      "\nK RAVINDER REDDY (SC FOR GHMC) (R3)\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/755/2023",
    res_advoate: "V VENKATA MAYUR",
    pet_advocate: "B JAGAN MADHAVA RAO\n",
    district: "SANGAREDDY",
    case_type: "",
  },
  {
    case_number: "CC/1247/2023",
    res_advoate: "CHANDRAIAH SUNKARA",
    pet_advocate: "\nM A K MUKHEED (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/2621/2023",
    res_advoate: "IRFAN KHAN",
    pet_advocate:
      "\nM DHANANJAY REDDY (SC FOR GHMC) (R5)\n\nRR 1 to 3- Notice served. RR 4 & 5- Notice sent through DJ-Medchal Malkajgiri District by Speed Post to serve on respondent-received by DJ-Medchal Malkajgiri District and notice sent by RPAD not yet returned served.",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2657/2023",
    res_advoate: "GOPALA RAO AMANCHARLA V",
    pet_advocate:
      "\nM DHANANJAY REDDY (SC FOR GHMC) (R2)\nGP FOR HOME (R6)\nM DHANANJAY REDDY (SC FOR GHMC) (R4)\nGP FOR IRRI AND COMM AREA DEV (R5)\n\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2665/2023",
    res_advoate: "V RAMU",
    pet_advocate: "\nM DURGA PRASAD (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/2670/2023",
    res_advoate: "NAMBI KRISHNA",
    pet_advocate: "B JAGAN MADHAVA RAO\n",
    district: "SANGAREDDY",
    case_type: "",
  },
  {
    case_number: "CC/2672/2023",
    res_advoate: "K VENUMADHAV",
    pet_advocate: "B JAGAN MADHAVA RAO\n",
    district: "JAGTIAL",
    case_type: "",
  },
  {
    case_number: "CC/2716/2023",
    res_advoate: "SANDEEP KUMAR BODLA",
    pet_advocate: "\n",
    district: "MAHABUBABAD",
    case_type: "",
  },
  {
    case_number: "CC/32/2024",
    res_advoate: "P SREE RAMYA",
    pet_advocate: "\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/3149/2018",
    res_advoate: "B H R CHOWDARY",
    pet_advocate:
      "\nGP FOR GENERAL ADMINISTRATION (R3)\n\nRR 1 to 3 NOTICE SERVED",
    district: "ADILABAD",
    case_type: "IA 1/2018(Leave Petition)",
  },
  {
    case_number: "CC/1386/2019",
    res_advoate: "V BRAHMAIAH CHOWDARY",
    pet_advocate:
      "M DHANANJAY REDDY (SC FOR GHMC)\nG JHANSI (R3)\nG JHANSI (R4)\nK SIDDHARTH RAO (R2)\n\nRR 1 TO 4 NOTICE SERVED.",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/379/2020",
    res_advoate: "AADESH VARMA",
    pet_advocate:
      "PASHAM KRISHNA REDDY\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\nOrder dt.17.03.2022 IA No. 1 of 2022 R3- NOTICE SERVED.",
    district: "HYDERABAD",
    case_type: "IA 1/2022(Implead Petition)",
  },
  {
    case_number: "CC/673/2020",
    res_advoate: "I V RADHAKRISHNA MURTHY",
    pet_advocate: "GP FOR REVENUE\nRR 1 AND 2 NOTICE SERVED.",
    district: "NIZAMABAD",
    case_type: "",
  },
  {
    case_number: "CC/66/2021",
    res_advoate: "VIJAY B PAROPAKARI",
    pet_advocate:
      "\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\nRR 1 NOTICE SERVED. R2 & 3- Notice sent by RPAD not yet returned served. R4- Notice sent through CJ-City Civil Court, Hyderabad returned unserved (no such name person residing at given address).",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "WP/23581/2020",
    res_advoate: "VIJAY B PAROPAKARI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPASHAM KRISHNA REDDY (R4)\nJANARDHAN REDDY KOTHA (R5)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2020(Direction Petition)",
  },
  {
    case_number: "CC/743/2021",
    res_advoate: "NARESH REDDY CHINNOLLA",
    pet_advocate:
      "GP FOR PANCHAYAT RAJ RURAL DEV\nKISHORE RAO PUSKURU (SC FOR TS ZILLA PARISHADS) (R2)\n\nRR 1 & 2 notice served.",
    district: "ADILABAD",
    case_type: "",
  },
  {
    case_number: "CC/867/2022",
    res_advoate: "PASHAM KRISHNA REDDY",
    pet_advocate:
      "V NARASIMHA GOUD(SC FOR HMDA)\nGP FOR PANCHAYAT RAJ RURAL DEV (R4)\nGP FOR PANCHAYAT RAJ RURAL DEV (R3)\nGP FOR PANCHAYAT RAJ RURAL DEV (R2)\nC HANUMANTHA RAO (R9)\nC HANUMANTHA RAO (R8)\n\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/905/2022",
    res_advoate: "KIRTHI TEJA KONDAVEETI",
    pet_advocate:
      "\nTHOODI CHANDRASEKHAR RAO (R5)\nGP FOR SERVICES III (R2)\n\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/1481/2022",
    res_advoate: "B SANTOSH",
    pet_advocate: "PRAVEEN KUMAR VEERJALA (SC FOR GHMC)\nR 3 NOTICE SERVED.",
    district: "HYDERABAD",
    case_type: "IA 1/2022(Leave Petition)",
  },
  {
    case_number: "CC/1633/2022",
    res_advoate: "M V HANUMANTHA RAO",
    pet_advocate: "GP FOR PANCHAYAT RAJ RURAL DEV\nHCJ NOTE",
    district: "WARANGAL",
    case_type: "",
  },
  {
    case_number: "WP/23621/2022",
    res_advoate: "K MALLIKARJUN",
    pet_advocate:
      "GP FOR PANCHAYAT RAJ RURAL DEV\nM V HANUMANTHA RAO (R7)\nC KALYAN RAO ( SC FOR ZPP AND MPP AND GPS) (R2)\nM V HANUMANTHA RAO\nR CHANDRA SHEKAR REDDY (SC FOR TS ZILLA PARISHADS) (R4)\nGP FOR REVENUE (R5)\n\n",
    district: "WARANGAL",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "CC/1882/2022",
    res_advoate: "N SRUSHMAN REDDY",
    pet_advocate: "B JAGAN MADHAVA RAO\nR2- Notice served.",
    district: "MANCHERIAL",
    case_type: "IA 1/2023(Implead Petition)",
  },
  {
    case_number: "CC/1948/2022",
    res_advoate: "CH SIDDHARTHA SARMA",
    pet_advocate: "ABU AKRAM (SC FOR TSWB)\nPART HEARD",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2265/2022",
    res_advoate: "MOHAMMED RAHAIL AHMED",
    pet_advocate:
      "PADMA RAO LAKKARAJU (SC FOR NHAI)\nPADMA RAO G S LAKKARAJU (R2)\nGP FOR LAND ACQUISITION (R3)\n\nOrder dt.21.04.2023 R3- Notice sent by RPAD not yet returned served.",
    district: "MANCHERIAL",
    case_type: "IA 1/2023(Dispense with Petition)",
  },
  {
    case_number: "WP/30218/2021",
    res_advoate: "MOHAMMED RAHAIL AHMED",
    pet_advocate:
      "GP FOR LAND ACQUISITION\nBRAHMMADANDI PRAVEEN KUMAR (R2)\n\n",
    district: "ADILABAD",
    case_type: "IA 1/2021(Direction Petition)",
  },
  {
    case_number: "CC/85/2023",
    res_advoate: "NARESH REDDY CHINNOLLA",
    pet_advocate:
      "GP FOR IRRI AND COMM AREA DEV\nOrder dt.30.06.2023 SR notice served.",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/265/2023",
    res_advoate: "MOHD MUMTAZ PASHA",
    pet_advocate: "M DURGA PRASAD (SC FOR GHMC)\nRR 1 and 2 notice served.",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/427/2023",
    res_advoate: "SHYAM S AGRAWAL",
    pet_advocate: "\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "WP/18516/2023",
    res_advoate: "PAPAIAH PEDDAKULA",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nSHYAM S AGRAWAL (R4)\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R3)\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Stay Petition)",
  },
  {
    case_number: "WP/18873/2023",
    res_advoate: "R ANURAG",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nSHYAM S AGRAWAL\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/451/2023",
    res_advoate: "C KUMAR",
    pet_advocate: "\nL PRABHAKAR REDDY SC FOR TSIIC (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/422/2023",
    res_advoate: "C KUMAR",
    pet_advocate: "\nGP FOR HOME (R3)\nL PRABHAKAR REDDY SC FOR TSIIC (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/766/2023",
    res_advoate: "M/s GIX LAW FIRM AND LEGAL SERVICES",
    pet_advocate: "GP FOR PANCHAYAT RAJ RURAL DEV\n",
    district: "KAMAREDDY",
    case_type: "IA 1/2023(Permission Petition)",
  },
  {
    case_number: "CC/775/2023",
    res_advoate: "K UDAYA SRI",
    pet_advocate: "\nGP FOR SERVICES I (R5)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/883/2023",
    res_advoate: "SRIKANTH KAVETI",
    pet_advocate:
      "P SRIDHAR RAO (SC FOR KMC)\norder dt 25/01/24. RR 1 and 2- Notice sent by RPAD not yet returned served.",
    district: "KHAMMAM",
    case_type: "",
  },
  {
    case_number: "CC/1121/2023",
    res_advoate: "NARESH REDDY CHINNOLLA",
    pet_advocate: "PASHAM KRISHNA REDDY\n",
    district: "NIRMAL",
    case_type: "",
  },
  {
    case_number: "CC/1166/2023",
    res_advoate: "PRABHAKAR PERI",
    pet_advocate:
      "\nGP FOR REVENUE (R4)\nJEERIPOTHULA SRINIVAS (R6)\nJEERIPOTHULA SRINIVAS (R5)\nK RAVINDER REDDY (SC FOR GHMC) (R2)\nJEERIPOTHULA SRINIVAS (R7)\n\nRR 1 to 3, 5, 6 and 7 notice served. R 4 notice sent returned unserved.",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/8537/2023",
    res_advoate: "PRABHAKAR PERI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R3)\nJEERIPOTHULA SRINIVAS (R8)\nGP FOR REVENUE (R6)\nJEERIPOTHULA SRINIVAS (R7)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/2067/2023",
    res_advoate: "D PADMAVATHI",
    pet_advocate: "\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2073/2023",
    res_advoate: "D S V G NAGARAJU",
    pet_advocate:
      "M RAM MOHAN REDDY (SC FOR MUNICIPALITIES TG)\nSR-Notice sent through DJ-Mahabubnagar District by Speed Post to serve on respondent-received by DJ-Mahabubnagar District and notice sent by RPAD not yet returned served.",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2166/2023",
    res_advoate: "SURESH SHIV SAGAR",
    pet_advocate: "D MADHAVI (SC FOR HMDA)\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/2193/2023",
    res_advoate: "VENKAT RAO PATIL",
    pet_advocate:
      "\nM DHANANJAY REDDY (SC FOR GHMC) (R2)\nM DHANANJAY REDDY (SC FOR GHMC) (R3)\n\nR2- Notice served. R3- Notice sent through DJ-Medchal Malkajgiri District at Malkajgiri and by RPAD not yet returned served.",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2304/2023",
    res_advoate: "B SUDHAKAR REDDY AND NEERAJA REDDY",
    pet_advocate:
      "M RAM MOHAN REDDY (SC FOR MUNICIPALITIES TG)\nSR- Notice served.",
    district: "PEDDAPALLI",
    case_type: "",
  },
  {
    case_number: "CC/2413/2023",
    res_advoate: "SRINIVASA RAO BODDULURI",
    pet_advocate: "\nK SIDDHARTH RAO (R4)\n\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "WP/40338/2022",
    res_advoate: "SRINIVASA RAO BODDULURI",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "CC/2577/2023",
    res_advoate: "IBAD UR REHMAN KHAN",
    pet_advocate: "\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "",
  },
  {
    case_number: "CC/2774/2023",
    res_advoate: "G GOPI",
    pet_advocate:
      "M RAM MOHAN REDDY (SC FOR MUNICIPALITIES TG)\nV ROHITH (R4)\n\n",
    district: "PEDDAPALLI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "CC/2792/2023",
    res_advoate: "S SRIDHAR",
    pet_advocate: "\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/2803/2023",
    res_advoate: "D RAMAKRISHNA",
    pet_advocate:
      "B JAGAN MADHAVA RAO\nSR notice sent through DJ, Siddipet District and by RPAD not yet returned served.",
    district: "SIDDIPET",
    case_type: "",
  },
  {
    case_number: "CC/2812/2023",
    res_advoate: "P RADHAKRISHNA",
    pet_advocate: "CH JAGANNATHA RAO ( SC FOR NS MATTERS OF MUPLTY/CORPN)\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/24/2024",
    res_advoate: "GUMMALLA BHASKER REDDY",
    pet_advocate:
      "\nSR notice sent through DJ, Karimnagar District at Karimnagar and by RPAD not yet returned served.",
    district: "KARIMNAGAR",
    case_type: "",
  },
  {
    case_number: "CC/31/2024",
    res_advoate: "K RAM MURTHY",
    pet_advocate: "M DURGA PRASAD (SC FOR GHMC)\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/55/2024",
    res_advoate: "B V V S MURTHY",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/162/2024",
    res_advoate: "M V HANUMANTHA RAO",
    pet_advocate: "\nK SIDDHARTH RAO (R2)\n\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/179/2024",
    res_advoate: "U V SURESH KUMAR",
    pet_advocate:
      "V NARASIMHA GOUD(SC FOR HMDA)\nRR 1 & 2 notice sent through Chief Judge, City civil court, Hyderabad by special messenger and by RPAD. smt. M. Santhi Vardhini secretary, High Court, Legal Services committee, Hyderabad by special messenger notice served.",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "",
  },
  {
    case_number: "CC/188/2024",
    res_advoate: "SAINI ARAVIND",
    pet_advocate: "M DHANANJAY REDDY (SC FOR GHMC)\nRR 1 & 2 notice served.",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "",
  },
  {
    case_number: "CC/236/2024",
    res_advoate: "G ARUN KUMAR",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/293/2024",
    res_advoate: "VEDULA CHITRALEKHA",
    pet_advocate: "\nDHARMESH D.K.JAISWAL (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "",
  },
  {
    case_number: "CC/1818/2023",
    res_advoate: "MOHAMMED SANAULLAH FARHAN",
    pet_advocate:
      "\nK SIDDHARTH RAO (R3)\n\nRR 1 to 3- Notice sent through CJ-City Civil Court, Hyderabad and by RPAD.",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/1877/2023",
    res_advoate: "L SHANTARAM",
    pet_advocate:
      "\nK SIDDHARTH RAO (R2)\n\nRR 1 to 3- Notice sent through CJ-City Civil Court, Hyderabad through Spl.messenger and by RPAD not yet returned served",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2320/2023",
    res_advoate: "DHARMESH D.K.JAISWAL",
    pet_advocate: "M DURGA PRASAD (SC FOR GHMC)\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2567/2023",
    res_advoate: "G PREMALATHA",
    pet_advocate: "GP FOR REVENUE\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "",
  },
  {
    case_number: "CC/22/2020",
    res_advoate: "SREENIVASA RAO VELIVELA",
    pet_advocate: "\nPASHAM KRISHNA REDDY (R3)\n\nRR 1 TO 4 NOTICE SERVED.",
    district: "HYDERABAD",
    case_type: "IA 1/2020(Receive Docs Petition)",
  },
  {
    case_number: "WP/22669/2019",
    res_advoate: "SREENIVASA RAO VELIVELA",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPASHAM KRISHNA REDDY (R4)\nPASHAM KRISHNA REDDY\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2019(Direction Petition)",
  },
  {
    case_number: "CC/761/2022",
    res_advoate: "PADALA PRAVIN KUMAR",
    pet_advocate: "G MALLA REDDY (SC FOR MUNICIPALITIES)\nSR- Notice served.",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/199/2022",
    res_advoate: "PADALA PRAVIN KUMAR",
    pet_advocate: "N PRAVEEN KUMAR(SC FOR MC TELANGANA)\nSR NOTICE SERVED.",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/201/2022",
    res_advoate: "PADALA PRAVIN KUMAR",
    pet_advocate: "\nSR NOTICE SERVED.",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/203/2022",
    res_advoate: "PADALA PRAVIN KUMAR",
    pet_advocate: "N PRAVEEN KUMAR(SC FOR MC TELANGANA)\nSR NOTICE SERVED.",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/216/2023",
    res_advoate: "ZEESHAN ADNAN MAHMOOD",
    pet_advocate:
      "G K DESHPANDE\nVIVEK JAIN (R2)\nNYSHADHAM CHANDRA SEKHAR (R3)\nNYSHADHAM CHANDRA SEKHAR (R5)\nNYSHADHAM CHANDRA SEKHAR (R4)\n\nOrder dt.28.04.2023 R1- Notice served.",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Leave Petition)",
  },
  {
    case_number: "CC/502/2023",
    res_advoate: "MOHAMMED ABDUL RASHEED",
    pet_advocate: "NARGIS AFSHAN KHAN\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Leave Petition)",
  },
  {
    case_number: "CC/1101/2023",
    res_advoate: "RADHIKA PALLA",
    pet_advocate: "\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/2388/2023",
    res_advoate: "PULLA RAO YELLANKI",
    pet_advocate:
      "B JAGAN MADHAVA RAO\nGP FOR REVENUE (R2)\nGP FOR REVENUE (R4)\nGP FOR REVENUE (R3)\nGP FOR REVENUE (R5)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "",
  },
  {
    case_number: "CC/113/2024",
    res_advoate: "LAXMALLA SANDEEP",
    pet_advocate: "B JAGAN MADHAVA RAO\n",
    district: "JAGTIAL",
    case_type: "",
  },
  {
    case_number: "CC/141/2024",
    res_advoate: "SHAFATH AHMED KHAN",
    pet_advocate: "\n",
    district: "JOGULAMBA GADWAL",
    case_type: "",
  },
  {
    case_number: "CC/247/2024",
    res_advoate: "WASIM AHMED KHAN",
    pet_advocate:
      "GP FOR PANCHAYAT RAJ RURAL DEV\nJALAPALLI MADHAVI REDDY (R2)\n\nRR 1 and 2 notice sent to DJ, medak District by speed post to serve on respondent recieved by DJ and RR 1 and 2 notice sent by RPAD not yet returned served.",
    district: "MEDAK",
    case_type: "",
  },
  {
    case_number: "CC/283/2024",
    res_advoate: "T SURYA SATISH",
    pet_advocate:
      "GP FOR REVENUE\nB JAGAN MADHAVA RAO (R3)\n\nRR 1, 2, 4 to 8 notice served. R 3 notice sent through DJ, Rajanna Sircilla District returned unserved (transferred).",
    district: "RAJANNA SIRCILLA",
    case_type: "",
  },
  {
    case_number: "CC/314/2024",
    res_advoate: "V VENKATA MAYUR",
    pet_advocate:
      "MOHAMMAD ADNAN\nSR notice sent to Chief Judge, City civil court, Hyderabad by special messenger to serve on respondent received by chief Judge and SR notice sent by RPAD not yet returned served.",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/323/2024",
    res_advoate: "RAHUL BHATI",
    pet_advocate:
      "\nK SIDDHARTH RAO (R4)\n\nRR 1, 2 and 4 notice sent through Chief Judge, City civil court, Hyderabad and by RPAD not yet returned served.R 3 notice sent returned unserved.",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/328/2024",
    res_advoate: "K SAI KRISHNA MOHAN RAO",
    pet_advocate:
      "\nK RAVINDER REDDY (SC FOR GHMC) (R3)\nGP FOR MCPL ADMN URBAN DEV (R2)\n\nRR 1 and 2 notice sent to Chief Judge, City civil court, Hyderabad by special messenger and by RPAD not yet returned served. R 2 notice sent through DJ, medchal malkajgiri District and by RPAD not yet returned served.",
    district: "VIKARABAD",
    case_type: "",
  },
  {
    case_number: "CC/332/2024",
    res_advoate: "GUMMALLA BHASKER REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R5)\n\nRR 1 to 6 notice sent through Chief Judge, City civil court, Hyderabad and by RPAD not yet returned served.",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/358/2024",
    res_advoate: "PONNAM MAHESH BABU",
    pet_advocate: "V SATYAM REDDY\nSR notice served.",
    district: "NIZAMABAD",
    case_type: "IA 1/2024(Leave Petition)",
  },
  {
    case_number: "CC/362/2024",
    res_advoate: "P.RAMESH BABU",
    pet_advocate:
      "\nM DHANANJAY REDDY (SC FOR GHMC) (R2)\n\nR 1 notice served. R 2 notice sent through Chief Judge, city civil court, hyderabad and by RPAD not yet returned served.",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "CRP/877/2024",
    res_advoate: "M V VENU",
    pet_advocate:
      "\nRR1 TO 3 NOTICE SENT, NOT YET RETURNED. PROOF OF SERVICE NOT FILED.",
    district: "KHAMMAM",
    case_type: "IA 1/2024(Stay Petition)",
  },
  {
    case_number: "CRP/896/2024",
    res_advoate: "ERIGI GANESH",
    pet_advocate:
      "P DURGA PRASAD\nR1 APP. R2 NOTICE SENT NOT YET RETURNED RR 3 TO 7 ARE NOT NECESSARY VIDE CT PROOF OF SERVICE NOT FILED",
    district: "KHAMMAM",
    case_type: "IA 1/2024(Dispense with Petition)",
  },
  {
    case_number: "CC/2416/2023",
    res_advoate: "PULLA RAO YELLANKI",
    pet_advocate:
      "B JAGAN MADHAVA RAO\nGP FOR REVENUE (R2)\nGP FOR REVENUE (R4)\nGP FOR REVENUE (R3)\nGP FOR REVENUE (R5)\n\nR1- Notice sent through RPAD not yet returned served.",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "",
  },
  {
    case_number: "CC/2445/2023",
    res_advoate: "K RAM MURTHY",
    pet_advocate: "M DURGA PRASAD (SC FOR GHMC)\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/2508/2023",
    res_advoate: "MIRZA SHAH NAWAZ BAIG",
    pet_advocate: "PRAVEEN KUMAR VEERJALA (SC FOR GHMC)\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Amendment Petition)",
  },
  {
    case_number: "CC/2516/2023",
    res_advoate: "SATYANARAYANA DHARMAPURI",
    pet_advocate: "\nK SIDDHARTH RAO (R3)\n\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2597/2023",
    res_advoate: "SATYANARAYANA DHARMAPURI",
    pet_advocate: "\nK SIDDHARTH RAO (R4)\n\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/2654/2023",
    res_advoate: "MANDHATA SLK SRUTHA KEERTHI",
    pet_advocate:
      "\nCENTRAL GOVERNMENT COUNSEL (K ARVIND KUMAR) (R4)\n\nR1- Notice sent through CJ-City Civil Court, Tiz Hazari Court, New Delhi by Speed Post to serve on respondent-received by CJ-City Civil Court, Tiz Hazari Court, New Delhi and notice sent by RPAD not yet returned served. R2- Notice sent through CJ-City Civil Court, Secunderabad and by RPAD not yet returned served. R3 & 4- Notice sent through DJ-Ananthapur District by Speed Post to serve on respondent-received by DJ-Ananthapur District and notice sent by RPAD not yet returned served.",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/81/2024",
    res_advoate: "S LAKSHMI KANTH",
    pet_advocate: "\n",
    district: "KARIMNAGAR",
    case_type: "",
  },
  {
    case_number: "CC/383/2024",
    res_advoate: "V UMA DEVI",
    pet_advocate:
      "\nD MADHAVI (SC FOR HMDA) (R2)\n\nR 1 notice served. R 2 notice sent through Chief Judge, City civil court, Hyderabad and by RPAD not yet returned served.",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/472/2024",
    res_advoate: "GULAM MUSTAFA RABBANI",
    pet_advocate: "PRAVEEN KUMAR VEERJALA (SC FOR GHMC)\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/523/2024",
    res_advoate: "PRUDHVI RAJ MUDUNURI",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "CC/561/2024",
    res_advoate: "NARESH KUMAR GORIGE",
    pet_advocate: "M DURGA PRASAD (SC FOR GHMC)\n",
    district: "RANGA REDDY",
    case_type: "",
  },
  {
    case_number: "CC/567/2024",
    res_advoate: "G SINDHU",
    pet_advocate:
      "\nBONDEMPALLY RAMULU (R3)\n\nRR 1 to 3 notice sent through Chief Judge, City civil court, Hyderabad and by RPAD not yet returned served.",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "COMPA/62/2022",
    res_advoate: "MR J SRINADHA REDDY COUNSEL FOR OL",
    pet_advocate: "\n",
    district: "HYDERABAD",
    case_type: "",
  },
  {
    case_number: "EP/6/2019",
    res_advoate: "RAVI SHANKAR JANDHYALA",
    pet_advocate:
      "N MANOHAR\nRR 1 & 9 NOTICE SENT NOT YET RETURNED. R 2 UNSERVED (DOOR LOCKED) RR 3 TO 5, 7 & 10 TO 12 SERVED. R6 UNSERVED (NO SUCH ADDRESSE) R8 UNSERVED (NOT IN VILLAGE) R13 DELETED VIDE CO DT: 08.11.2019 IN IA NO.1/2019.",
    district: "MAHABUBNAGAR",
    case_type: "IA 1/2021(Miscellaneous Petition)",
  },
  {
    case_number: "EP/35/2019",
    res_advoate: "MUDDU VIJAY",
    pet_advocate:
      "AVINASH DESAI\nALY AHMED BASITH (R25)\nPRABHAKAR PERI (R6)\nADDL ADVOCATE GENERAL (R3)\nN NAVEEN KUMAR (R5)\nN MANIK RAO (R12)\n\nRR 1&2 APPS BY SRI AVINASH DESAI VIDE IN IA NO.02/2019 R3 APPS BY ADLL.ADVOCATE GENERAL RR 7,10,13 TO24 AND 26 SERVED RR 4,11 UNSERVED R5 APPS BY SRI N.NAVEEN KUMAR R12 APPS BY SRI N.MANIK RAO R 8 NOTICE SENT NOT YET RETURNED. R25 APPS. BY ALY AHMED BASITH.",
    district: "RANGA REDDY",
    case_type: "IA 1/2020(Miscellaneous Petition)",
  },
  {
    case_number: "EP/1/2019",
    res_advoate: "P PRATAP",
    pet_advocate:
      "KATIKA RAVINDER REDDY\nPRABHAKAR CHIKKUDU (R23)\nAVINASH DESAI (R4)\nAVINASH DESAI (R2)\nAVINASH DESAI (R3)\nAVINASH DESAI\nI MAAMU VANI (R7)\n\nR1 APPS BY SRI G.MANOHAR R2 APPS BY SRI AVINASH DESAI. RR 5,6,8 TO12, 14 TO 21 & 24 SERVED. R7 APPS. I MAMU VANI R13 UNSERVED (NOT IN VILLAGE) R 22 UNCLAIMED R23 APPS. BY SRI. PRABHAKAR RR 3& 4 APPS BY SRI AVINASH DESAI IN IA NO.5.",
    district: "ADILABAD",
    case_type: "IA 1/2019(Direction Petition)",
  },
  {
    case_number: "WP/6435/2023",
    res_advoate: "E ANISHA REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nV NARASIMHA GOUD(SC FOR HMDA) (R2)\nGP FOR REVENUE (R3)\nDIVYA RAI SOHNI (R6)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/22506/2020",
    res_advoate: "RAPOLU BHASKAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM AJAY KUMAR(SC FOR TG KUDA) (R2)\nA VENKATESH (R3)\n\n",
    district: "WARANGAL",
    case_type: "IA 1/2020(Suspension Petition)",
  },
  {
    case_number: "WP/4849/2021",
    res_advoate: "M V HANUMANTHA RAO",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nM DHANANJAY REDDY (SC FOR GHMC) (R3)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2021(Direction Petition)",
  },
  {
    case_number: "WP/15734/2021",
    res_advoate: "KISHORE RAI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nSAMPATH PRABHAKAR REDDY (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2021(Direction Petition)",
  },
  {
    case_number: "WP/44897/2022",
    res_advoate: "K K MAHENDER REDDY PERI PRABHAKAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R3)\nGP FOR REVENUE (R4)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "WP/45596/2022",
    res_advoate: "NUSRATH SHAHEZADI",
    pet_advocate: "M DURGA PRASAD (SC FOR GHMC)\n",
    district: "HYDERABAD",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "WP/14182/2023",
    res_advoate: "GULAM RABBANI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DURGA PRASAD (SC FOR GHMC) (R2)\nS M SAIFULLAH (R1)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/14270/2023",
    res_advoate: "P NARASIMHA",
    pet_advocate: "GP FOR GENERAL ADMINISTRATION\nGP FOR REVENUE (R2)\n\n",
    district: "WARANGAL",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/17226/2023",
    res_advoate: "T V KALYAN SINGH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM RAM MOHAN REDDY (SC FOR MUNICIPALITIES TG) (R3)\nTHIMMARAJU RAMCHANDRA RAO (R5)\nTHIMMARAJU RAMCHANDRA RAO (R2)\nTHIMMARAJU RAMCHANDRA RAO (R4)\n\n",
    district: "NIZAMABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/18274/2023",
    res_advoate: "KURITI BHASKARA RAO",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\n\n",
    district: "NIZAMABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/18552/2023",
    res_advoate: "MOHAMMAD ADNAN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nS ABHAY KUMAR SAGAR (MUNICIPAL CORP) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/18635/2023",
    res_advoate: "S SHARAT KUMAR",
    pet_advocate:
      "GP FOR REVENUE\nNARI USHA RANI (R7)\nK SIDDHARTH RAO (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/19111/2023",
    res_advoate: "R SUJAN KUMAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nNAYAKAWADI RAMESH (R7)\nM RAM MOHAN REDDY (SC FOR MUNICIPALITIES TG) (R2)\nNAYAKAWADI RAMESH (R8)\nNAYAKAWADI RAMESH (R6)\nNAYAKAWADI RAMESH (R4)\n\n",
    district: "MAHABUBNAGAR",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/19167/2023",
    res_advoate: "GADDAM SRINIVAS",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nD MADHAVI (SC FOR HMDA) (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/19398/2023",
    res_advoate: "VEDULA CHITRALEKHA",
    pet_advocate:
      "GP FOR PANCHAYAT RAJ RURAL DEV\nGP FOR REVENUE (R4)\nM SESHA TALPA SAI (R6)\nKISHORE RAO PUSKURU (SC FOR TS ZILLA PARISHADS) (R5)\nD MADHAVI (SC FOR HMDA) (R3)\nD MADHAVI (SC FOR HMDA) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/20253/2023",
    res_advoate: "BELPU VISHNU RAO",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nCH JAGANNATHA RAO ( SC FOR NS MATTERS OF MUPLTY/CORPN) (R3)\nSURVI PRAVEEN GOUD (R12)\nD MADHAVI (SC FOR HMDA) (R2)\nSURVI PRAVEEN GOUD (R5)\nB MADHU SUDHAN RAO (R11)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Set Aside Petition)",
  },
  {
    case_number: "WP/20852/2023",
    res_advoate: "CHENCHU RAMAIAH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nV NARASIMHA GOUD(SC FOR HMDA) (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/20966/2023",
    res_advoate: "MOHD SAIFUDDIN GHORI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nMIRZA SHAH NAWAZ BAIG (R10)\nGP FOR HOME (R6)\nMIRZA SHAH NAWAZ BAIG (R9)\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/21470/2023",
    res_advoate: "GADDAM KIRAN KUMAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nS ABHAY KUMAR SAGAR (MUNICIPAL CORP) (R2)\nRAKESH SANGHI\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/21581/2023",
    res_advoate: "M PRANAV",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R3)\n\n",
    district: "NAGARKURNOOL",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "WP/21626/2023",
    res_advoate: "CHATLA MADHU",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPULLA RAO YELLANKI (R3)\nPULLA RAO YELLANKI\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "MANCHERIAL",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/22465/2023",
    res_advoate: "G L NARASIMHA RAO",
    pet_advocate: "\nGP FOR HOME (R5)\nGP FOR ENDOWMENTS (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/23384/2023",
    res_advoate: "N HARI PRASAD",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nMADAS BHARATH CHANDRA (R3)\nKADARU PRABHAKAR RAO (R2)\n\n",
    district: "KARIMNAGAR",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/23443/2023",
    res_advoate: "K MALLAIAH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DURGA PRASAD (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/3260/2023",
    res_advoate: "M/s. OM LAW FIRM",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DURGA PRASAD (SC FOR GHMC) (R2)\nAYESHA SABA (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/23867/2023",
    res_advoate: "P V V GOPALAKRISHNA MURTHY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/24137/2023",
    res_advoate: "NARENDAR JALLI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/24183/2023",
    res_advoate: "R NAGARJUNA REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\nD MADHAVI (SC FOR HMDA) (R3)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/24213/2023",
    res_advoate: "N KRISHNA SUMANTH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nD MADHAVI (SC FOR HMDA) (R4)\nGP FOR REVENUE (R5)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/24245/2023",
    res_advoate: "MOHD LATEEF KHAN",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/24843/2023",
    res_advoate: "SARDAR JASBEER SINGH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nG KALYAN CHAKRAVARTHY (R4)\nK SIDDHARTH RAO (R3)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "WP/24847/2023",
    res_advoate: "RAPOLU BHASKAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR IRRI AND COMM AREA DEV (R4)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R3)\n\n",
    district: "NALGONDA",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/24992/2023",
    res_advoate: "S THIRUNATHAN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nV S SUDHAKAR (R6)\nM DHANANJAY REDDY (SC FOR GHMC) (R4)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/24995/2023",
    res_advoate: "M A K MUKHEED",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R3)\nNASEEM ARA (R5)\nV SATYAM REDDY (SC FOR NIZAMABAD MUNICIPAL CORPORATION) (R2)\n\n",
    district: "NIZAMABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25035/2023",
    res_advoate: "V YADU KRISHNA SAINATH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nV NARASIMHA GOUD(SC FOR HMDA) (R4)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25251/2023",
    res_advoate: "J VENKATESWARA REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nKIRAN PALAKURTHI (R8)\nKIRAN PALAKURTHI (R7)\nKIRAN PALAKURTHI (R9)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\nKIRAN PALAKURTHI (R10)\nKIRAN PALAKURTHI (R6)\nKIRAN PALAKURTHI (R4)\nKIRAN PALAKURTHI (R5)\n\n",
    district: "NALGONDA",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25555/2023",
    res_advoate: "RAPOLU BHASKAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nGP FOR ROADS BUILDINGS (R4)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R3)\nGP FOR IRRI AND COMM AREA DEV (R5)\n\n",
    district: "NALGONDA",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25638/2023",
    res_advoate: "R A CHARY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nP SRIDHAR RAO (SC FOR KMC) (R2)\n\n",
    district: "KHAMMAM",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25675/2023",
    res_advoate: "V YADU KRISHNA SAINATH",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nKOKA SATYANARAYANA RAO (R3)\n\n",
    district: "NIZAMABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25683/2023",
    res_advoate: "G SURESH GOUD",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R2)\nGADI PRAVEEN KUMAR Dy. SOLICITOR GEN. OF INDIA (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25691/2023",
    res_advoate: "K HARISH KUMAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nN KRISHNA SUMANTH (R5)\nN KRISHNA SUMANTH (R6)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25718/2023",
    res_advoate: "PALLE NAGESWAR RAO",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nPALLE SRIHARINATH (R4)\n\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25779/2023",
    res_advoate: "A P SURESH RAM",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nBALLA RAVINDRANATH SAVITHRI DEVI (R8)\nBALLA RAVINDRANATH SAVITHRI DEVI (R7)\nBALLA RAVINDRANATH SAVITHRI DEVI (R38)\nBALLA RAVINDRANATH SAVITHRI DEVI (R46)\nBALLA RAVINDRANATH SAVITHRI DEVI (R13)\nBALLA RAVINDRANATH SAVITHRI DEVI (R27)\nGP FOR REVENUE (R3)\nBALLA RAVINDRANATH SAVITHRI DEVI (R19)\nBALLA RAVINDRANATH SAVITHRI DEVI (R12)\nBALLA RAVINDRANATH SAVITHRI DEVI (R9)\nBALLA RAVINDRANATH SAVITHRI DEVI (R41)\nBALLA RAVINDRANATH SAVITHRI DEVI (R25)\nBALLA RAVINDRANATH SAVITHRI DEVI (R36)\nBALLA RAVINDRANATH SAVITHRI DEVI (R18)\nBALLA RAVINDRANATH SAVITHRI DEVI (R35)\nBALLA RAVINDRANATH SAVITHRI DEVI (R15)\nBALLA RAVINDRANATH SAVITHRI DEVI (R28)\nBALLA RAVINDRANATH SAVITHRI DEVI (R43)\nBALLA RAVINDRANATH SAVITHRI DEVI (R20)\nBALLA RAVINDRANATH SAVITHRI DEVI (R29)\nBALLA RAVINDRANATH SAVITHRI DEVI (R40)\nBALLA RAVINDRANATH SAVITHRI DEVI (R11)\nBALLA RAVINDRANATH SAVITHRI DEVI (R45)\nBALLA RAVINDRANATH SAVITHRI DEVI (R32)\nBALLA RAVINDRANATH SAVITHRI DEVI (R26)\nBALLA RAVINDRANATH SAVITHRI DEVI (R30)\nBALLA RAVINDRANATH SAVITHRI DEVI (R10)\nBALLA RAVINDRANATH SAVITHRI DEVI (R34)\nBALLA RAVINDRANATH SAVITHRI DEVI (R16)\nBALLA RAVINDRANATH SAVITHRI DEVI (R23)\nBALLA RAVINDRANATH SAVITHRI DEVI (R21)\nBALLA RAVINDRANATH SAVITHRI DEVI (R24)\nBALLA RAVINDRANATH SAVITHRI DEVI (R31)\nBALLA RAVINDRANATH SAVITHRI DEVI (R37)\nBALLA RAVINDRANATH SAVITHRI DEVI (R42)\nBALLA RAVINDRANATH SAVITHRI DEVI (R47)\nBALLA RAVINDRANATH SAVITHRI DEVI (R14)\nBALLA RAVINDRANATH SAVITHRI DEVI (R33)\nBALLA RAVINDRANATH SAVITHRI DEVI (R22)\nBALLA RAVINDRANATH SAVITHRI DEVI (R17)\nBALLA RAVINDRANATH SAVITHRI DEVI (R44)\n\n",
    district: "SIDDIPET",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25790/2023",
    res_advoate: "SRINIVASA RAO BODDULURI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nVANKINA ALLU AND PARTNERS (R5)\nM A K MUKHEED (SC FOR GHMC) (R2)\nVANKINA ALLU AND PARTNERS (R6)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/25833/2023",
    res_advoate: "KIRAN PALAKURTHI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DURGA PRASAD (SC FOR GHMC) (R2)\nK VENUMADHAV (R6)\nK VENUMADHAV (R5)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/26399/2023",
    res_advoate: "GUDI MADHUSUDHAN REDDY",
    pet_advocate:
      "K RAVINDER REDDY (SC FOR GHMC)\nK SAI KRISHNA MOHAN RAO (R3)\nGP FOR MCPL ADMN URBAN DEV (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/26449/2023",
    res_advoate: "NIRMAL KUMAR PANDEY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DHANANJAY REDDY (SC FOR GHMC) (R2)\nM DHANANJAY REDDY (SC FOR GHMC) (R4)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/26545/2023",
    res_advoate: "MANIDEEP MADHAVARAPU",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/26549/2023",
    res_advoate: "PILLIX LAW FIRM",
    pet_advocate:
      "G NARENDER REDDY (SC FOR HMWS AND SB)\nGP FOR MCPL ADMN URBAN DEV (R6)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/27119/2023",
    res_advoate: "KONDAPARTHY KIRAN KUMAR\nA SURYANARAYANA\n",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nMANJARI S GANU (R5)\nMANJARI S GANU (R6)\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "WP/27220/2023",
    res_advoate: "K DURGA PRASAD",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nG MALLA REDDY (SC FOR MUNICIPALITIES) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "WP/27464/2023",
    res_advoate: "ZEESHAN ADNAN MAHMOOD",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR ROADS BUILDINGS (R5)\nVADEENDRA JOSHI (R9)\nKISHORE RAO PUSKURU (SC FOR TS ZILLA PARISHADS) (R4)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R3)\nD MADHAVI (SC FOR HMDA) (R2)\nVADEENDRA JOSHI (R10)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/27861/2023",
    res_advoate: "R PAVAN REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nSRINIVASA RAO BODDULURI (R10)\nSUBRAMANYAM DARABOINA (R9)\nC HANUMANTHA RAO (R11)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/27873/2023",
    res_advoate: "B V V S MURTHY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R3)\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/27932/2023",
    res_advoate: "TELLA RAJENDRA",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/27949/2023",
    res_advoate: "CHENCHU RAMAIAH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R3)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/27959/2023",
    res_advoate: "PAMULA VAMSHI KRISHNA",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM PRATHEEK REDDY (R3)\nK SIDDHARTH RAO (R2)\nTELLA RAJENDRA\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/27962/2023",
    res_advoate: "PAMULA VAMSHI KRISHNA",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R3)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "WP/28669/2023",
    res_advoate: "G KALYAN CHAKRAVARTHY",
    pet_advocate: "\nM RAMACHANDRA REDDY (R4)\nK SIDDHARTH RAO (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/28778/2023",
    res_advoate: "SATYANARAYANA DHARMAPURI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DHANANJAY REDDY (SC FOR GHMC) (R2)\nM DHANANJAY REDDY (SC FOR GHMC) (R3)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/28784/2023",
    res_advoate: "M KESHAV YADAV",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DHANANJAY REDDY (SC FOR GHMC)\nM DHANANJAY REDDY (SC FOR GHMC) (R3)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/28985/2023",
    res_advoate: "GOKULA RAMA RAO",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nD MADHAVI (SC FOR HMDA) (R3)\nG MALLA REDDY (SC FOR MUNICIPALITIES) (R4)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29055/2023",
    res_advoate: "K JAMALI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "SIDDIPET",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29089/2023",
    res_advoate: "NARENDAR JALLI",
    pet_advocate: "\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "WP/29102/2023",
    res_advoate: "BANDAR SRIKANTH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nA SRINIVAS REDDY (SC FOR TSRTC) (R3)\n\n",
    district: "MAHABUBABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29176/2023",
    res_advoate: "CHALAKANI VENKAT YADAV",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nCH JAGANNATHA RAO ( SC FOR NS MATTERS OF MUPLTY/CORPN) (R7)\nGP FOR REVENUE (R3)\nD MADHAVI (SC FOR HMDA) (R6)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29315/2023",
    res_advoate: "TEKURU SWETCHA",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R3)\nT P ACHARYA (R5)\n\n",
    district: "SIDDIPET",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29409/2023",
    res_advoate: "M LAYEEQ KHAN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R3)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29541/2023",
    res_advoate: "MOHD NASEER UDDIN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R6)\nA NAJEEB KHAN (R8)\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R5)\nA NAJEEB KHAN (R7)\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29573/2023",
    res_advoate: "CHAVALI RAMANAND",
    pet_advocate:
      "\nGP FOR MCPL ADMN URBAN DEV (R7)\nM.V. PRATAP KUMAR (R4)\nM.V. PRATAP KUMAR (R5)\nM.V. PRATAP KUMAR (R3)\n\n",
    district: "KHAMMAM",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "WP/29634/2023",
    res_advoate: "MIRZA MAHMOOD ALIBAIG",
    pet_advocate:
      "GP FOR REVENUE\nNARESH REDDY CHINNOLLA (R5)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R4)\nNARESH REDDY CHINNOLLA (R6)\nGP FOR MCPL ADMN URBAN DEV (R2)\n\n",
    district: "NIRMAL",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29667/2023",
    res_advoate: "HABEEB ABUBAKAR ALHAMED",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nKISHORE RAO PUSKURU (SC FOR TS ZILLA PARISHADS) (R4)\nGP FOR PANCHAYAT RAJ RURAL DEV (R2)\nGP FOR REVENUE (R5)\n\n",
    district: "KARIMNAGAR",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29684/2023",
    res_advoate: "C KUMAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nCH JAGANNATHA RAO (R2)\nV VENUMADHAV (R3)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29698/2023",
    res_advoate: "B MAHENDER REDDY",
    pet_advocate:
      "GP FOR HOUSING\nSAI PRASEN GUNDAVARAM (R3)\nKORIPELLY MADHUSUDHAN REDDY (SC FOR TRSCL) (R4)\nGP FOR ROADS BUILDINGS (R2)\nM RAM MOHAN REDDY (SC FOR MUNICIPALITIES TG) (R8)\nGP FOR REVENUE (R5)\n\n",
    district: "JOGULAMBA GADWAL",
    case_type: "IA 1/2023(Stay Petition)",
  },
  {
    case_number: "WP/29717/2023",
    res_advoate: "JAGATHPAL REDDY KASI REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nG NARENDER REDDY (SC FOR HMWS AND SB) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29790/2023",
    res_advoate: "YEMMIGANUR SOMA SRINATH REDDY",
    pet_advocate: "GP FOR HIGHER EDUCATION\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29847/2023",
    res_advoate: "VONJARI RAJA SHEKAR REDDY VENKAT RAM REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29865/2023",
    res_advoate: "ZEESHAN ADNAN MAHMOOD",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nVEDULA CHITRALEKHA (R3)\nK SIDDHARTH RAO (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29868/2023",
    res_advoate: "IMMANENI RAMA RAO",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R3)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29852/2023",
    res_advoate: "IMMANENI RAMA RAO",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R3)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29890/2023",
    res_advoate: "SHASHANK GARIGE",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R3)\nGP FOR IRRI AND COMM AREA DEV (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29911/2023",
    res_advoate: "J AZAD CHENDRA SHEKAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nV NARASIMHA GOUD(SC FOR HMDA) (R2)\nS SRIDHAR (R7)\nM DURGA PRASAD (SC FOR GHMC) (R4)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29919/2023",
    res_advoate: "V M M CHARY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC)\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R3)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29923/2023",
    res_advoate: "MOGILI ANAVENI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R4)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29931/2023",
    res_advoate: "N V SUBBA RAJU",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nB SIVA PRASAD (R3)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29936/2023",
    res_advoate: "CHALAKANI VENKAT YADAV",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nCH JAGANNATHA RAO ( SC FOR NS MATTERS OF MUPLTY/CORPN) (R4)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29959/2023",
    res_advoate: "VADEENDRA JOSHI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nSARANG AFZULPURKAR (R8)\nSARANG AFZULPURKAR (R6)\nSARANG AFZULPURKAR (R7)\nSARANG AFZULPURKAR (R9)\nK RAVINDER REDDY (SC FOR GHMC) (R2)\nSARANG AFZULPURKAR (R10)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/29981/2023",
    res_advoate: "CHERUKU RAVI KUMAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nL HARISH (R7)\nK SIDDHARTH RAO (R4)\nGP FOR LAND ACQUISITION (R5)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/30162/2023",
    res_advoate: "SUMAN KUMAR BALIJEPALLI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM A K MUKHEED (SC FOR GHMC) (R3)\nM YATEENDRA RAJU (R4)\nM A K MUKHEED (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/30578/2023",
    res_advoate: "K SANGAN NAIDU",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nS GOPAL RAO (R4)\nGP FOR REVENUE (R3)\nSAI PRASEN GUNDAVARAM (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Stay Petition)",
  },
  {
    case_number: "WP/30640/2023",
    res_advoate: "G SUBASH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nA KRANTI KUMAR REDDY (R6)\nSAI PRASEN GUNDAVARAM (R4)\nA KRANTI KUMAR REDDY (R7)\nA KRANTI KUMAR REDDY (R8)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/31214/2023",
    res_advoate: "S RAMA MOHAN RAO",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nD MADHAVI (SC FOR HMDA) (R3)\nG MALLA REDDY (SC FOR MUNICIPALITIES) (R4)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/31319/2023",
    res_advoate: "J P SRIKANTH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/31335/2023",
    res_advoate: "MOHD ASIFUDDIN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nV SEETHARAMA AVADHANI (R4)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "NALGONDA",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/31539/2023",
    res_advoate: "G RAJESHWAR RAO",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR HOME (R4)\nB KEERTHI REDDY (R5)\nB KEERTHI REDDY (R6)\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/31605/2023",
    res_advoate: "DIVYA RAI SOHNI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/31764/2023",
    res_advoate: "DOKKA MOHAN RAO",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPATLORI SRINIVAS RAO (R4)\nM DHANANJAY REDDY (SC FOR GHMC) (R3)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/31781/2023",
    res_advoate: "S CHANDRA MOHAN REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R3)\nGUMMALLA BHASKER REDDY (R4)\n\n",
    district: "NALGONDA",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/31828/2023",
    res_advoate: "MANJARI S GANU",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR PROHIBITION EXCISE (R5)\nGP FOR HOME (R7)\nE VENKATA SIDDHARTHA (R8)\nCHANDRASEN LAW OFFICES (R9)\nK SIDDHARTH RAO (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/31834/2023",
    res_advoate: "M S ANWAR SIDDIQUI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nV NARASIMHA GOUD(SC FOR HMDA) (R2)\nV NARASIMHA GOUD(SC FOR HMDA) (R3)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/32416/2023",
    res_advoate: "R PAVAN REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R3)\nM A K MUKHEED (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/32420/2023",
    res_advoate: "P INDRA PRAKASH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nN BHUJANGA RAO (R9)\nN BHUJANGA RAO (R8)\nN BHUJANGA RAO (R7)\nM A K MUKHEED (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/33249/2023",
    res_advoate: "HABEEB JAFFAR BIN HASAN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/33537/2023",
    res_advoate: "Y VIJAYA BHASKER REDDY",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/33544/2023",
    res_advoate: "Y VIJAYA BHASKER REDDY",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/33553/2023",
    res_advoate: "Y VIJAYA BHASKER REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/33832/2023",
    res_advoate: "JANARDHAN REDDY KOTHA",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPRAMOD MALIGI (R5)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\nD MADHAVI (SC FOR HMDA) (R3)\nPRAMOD MALIGI (R4)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "",
  },
  {
    case_number: "WP/33910/2023",
    res_advoate: "P SHASHI KIRAN",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/33927/2023",
    res_advoate: "SYED YASAR MAMOON",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nHASSAN HUSSAIN JUNAIDI (R3)\n\n",
    district: "VIKARABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/34394/2023",
    res_advoate: "SRIKANTH SUTARI",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R3)\nGP FOR HOME (R5)\n\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/34517/2023",
    res_advoate: "MANJARI S GANU",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nV V RAMANA (R6)\nMAYUR MUNDRA (R7)\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Suspension Petition)",
  },
  {
    case_number: "WP/34690/2023",
    res_advoate: "SHIVA KUMAR KONNE",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/34901/2023",
    res_advoate: "RAPOLU BHASKAR",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R3)\n\n",
    district: "KHAMMAM",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/34951/2023",
    res_advoate: "Y BALAJI",
    pet_advocate: "ADDL ADVOCATE GENERAL\nGP FOR REVENUE (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/35131/2023",
    res_advoate: "SOWMYA K",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nE SREENIVASA RAO\n\n",
    district: "NALGONDA",
    case_type: "IA 1/2023(Stay Petition)",
  },
  {
    case_number: "WP/1361/2024",
    res_advoate: "GUMMALLA BHASKER REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nE SREENIVASA RAO (R4)\nGP FOR REVENUE (R3)\nADDL ADVOCATE GENERAL (R2)\n\n",
    district: "NALGONDA",
    case_type: "IA 1/2024(Stay Petition)",
  },
  {
    case_number: "WP/35258/2023",
    res_advoate: "P INDRA PRAKASH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM A K MUKHEED (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2023(Direction Petition)",
  },
  {
    case_number: "WP/190/2024",
    res_advoate: "P SHASHI KIRAN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nV NARASIMHA GOUD(SC FOR HMDA) (R2)\nM/s RESU LAW OFFICE (R4)\nK PRADEEP REDDY\n\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/913/2024",
    res_advoate: "KOWLUR ARCHANA",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nP GIRI KRISHNA (R8)\nGP FOR REVENUE (R2)\nP GIRI KRISHNA (R6)\nM RAM MOHAN REDDY (SC FOR MUNICIPALITIES TG) (R4)\nP GIRI KRISHNA (R5)\nP GIRI KRISHNA (R7)\n\n",
    district: "MAHABUBNAGAR",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/917/2024",
    res_advoate: "CHANDRASEN LAW OFFICES",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R4)\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/1100/2024",
    res_advoate: "M/S INDUS LAW FIRM",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R5)\nGP FOR REVENUE (R6)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/1122/2024",
    res_advoate: "ANJALI AGARWAL",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R3)\nG MALLA REDDY (SC FOR MUNICIPALITIES) (R2)\nM V DURGA PRASAD (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/1242/2024",
    res_advoate: "KALEKAR SUNEEL KUMAR",
    pet_advocate: "\nGP FOR REVENUE (R3)\nGP FOR MCPL ADMN URBAN DEV (R2)\n\n",
    district: "NARAYANPET",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/1308/2024",
    res_advoate: "K MOHAN",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/2373/2024",
    res_advoate: "THOMAS LLOYD",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR HIGHER EDUCATION (R4)\nPRATUSHA BOPPANA (R5)\nGP FOR HOME (R6)\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/2419/2024",
    res_advoate: "R RANGANATHAN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nK RAVINDER REDDY (SC FOR GHMC) (R3)\nK RAVINDER REDDY (SC FOR GHMC) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Injunction Petition)",
  },
  {
    case_number: "WP/2648/2024",
    res_advoate: "PASHAM MOHITH",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/3109/2024",
    res_advoate: "P V L BHANU PRAKASH",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "MANCHERIAL",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/3582/2024",
    res_advoate: "KALEKAR SUNEEL KUMAR",
    pet_advocate:
      "\nGP FOR REVENUE (R4)\nGP FOR MCPL ADMN URBAN DEV (R2)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R6)\nK PRADEEP REDDY (R9)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/4745/2024",
    res_advoate: "SURESH SHIV SAGAR",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nM VIJAYA KUMAR GOUD (R3)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/4747/2024",
    res_advoate: "E SRIMANTH REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nGP FOR REVENUE (R2)\nG TIRUPATHI REDDY (R7)\nM DHANANJAY REDDY (SC FOR GHMC) (R5)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/5387/2024",
    res_advoate: "Y VENKATASATYAM",
    pet_advocate:
      "GP FOR HOUSING\nGP FOR REVENUE (R4)\nK BUCHI BABU (R2)\nK BUCHI BABU (R3)\n\n",
    district: "MEDCHAL-MALKAJGIRI",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/5417/2024",
    res_advoate: "B V V S MURTHY",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nK SIDDHARTH RAO (R4)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/5478/2024",
    res_advoate: "G DURGA CHARAN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM A K MUKHEED (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2024(Suspension Petition)",
  },
  {
    case_number: "WP/6990/2024",
    res_advoate: "P DEVENDER",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "YADADRI BHUVANAGIRI",
    case_type: "IA 1/2024(Direction Petition)",
  },
  {
    case_number: "WP/37043/2016",
    res_advoate: "G RAJESHWAR REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nP SHRAVAN KUMAR GOUD (R23)\nJ AZAD CHENDRA SHEKAR (R22)\nCH SHASHI BHUSHAN\nD MADHAVI (SC FOR HMDA) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2016(WVMP 5085/2016)(Vacate Stay Petition)",
  },
  {
    case_number: "WP/5414/2020",
    res_advoate: "C HARI PREETH",
    pet_advocate:
      "D MADHAVI (SC FOR HMDA)\nV V RAMANA (R3)\nL HARISH\nG NARENDER REDDY(SC FORTG ZPP MPP GPPS) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2020(Direction Petition)",
  },
  {
    case_number: "WP/18382/2021",
    res_advoate: "S S R MURTHY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nG NARENDER REDDY (SC FOR HMWS AND SB) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2021(Direction Petition)",
  },
  {
    case_number: "WP/43752/2018",
    res_advoate: "S S R MURTHY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nG NARENDER REDDY (SC FOR HMWS AND SB) (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2018(Direction Petition)",
  },
  {
    case_number: "WP/24406/2020",
    res_advoate: "S S R MURTHY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPRAVEEN KUMAR VEERJALA (SC FOR GHMC) (R2)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2020(Direction Petition)",
  },
  {
    case_number: "WP/13750/2022",
    res_advoate: "R SRIDHAR",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nROHIT POGULA (R5)\nPASHAM KRISHNA REDDY (R2)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "WP/21573/2022",
    res_advoate: "G RAJESHWAR REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nM DURGA PRASAD (SC FOR GHMC) (R2)\nA V SWAMY\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "WP/27241/2022",
    res_advoate: "CHANDRASEN LAW OFFICES",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nPASHAM KRISHNA REDDY (R4)\nJYOTHI ESWAR GOGINENI (R7)\nN NAVEEN KUMAR\nM SHARATH KUMAR (R6)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "WP/34511/2022",
    res_advoate: "MADHAVI PRIYA MANTENA",
    pet_advocate:
      "GP FOR MUNCIPAL ADMN URBAN DEV\nASHFAQ AHMED (R7)\nASHFAQ AHMED (R9)\nASHFAQ AHMED (R12)\nK SIDDHARTH RAO (R2)\nASHFAQ AHMED (R11)\nASHFAQ AHMED (R8)\nASHFAQ AHMED (R6)\n\n",
    district: "HYDERABAD",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "WP/43268/2022",
    res_advoate: "K RAGHUVEER REDDY",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nV NARASIMHA GOUD(SC FOR HMDA) (R2)\nA KRISHNAM RAJU (R5)\nV NARASIMHA GOUD(SC FOR HMDA) (R3)\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R4)\n\n",
    district: "SANGAREDDY",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "WP/44203/2022",
    res_advoate: "K. RAJASHEKAR",
    pet_advocate: "GP FOR MCPL ADMN URBAN DEV\nK. KIRAN MAYEE (R4)\n\n",
    district: "RANGA REDDY",
    case_type: "IA 1/2022(Direction Petition)",
  },
  {
    case_number: "WP/26554/2023",
    res_advoate: "P RAVI KIRAN",
    pet_advocate:
      "GP FOR MCPL ADMN URBAN DEV\nB JAGAN MADHAV RAO (SC FOR MUNICIPALITIES TS) (R2)\n\n",
    district: "RAJANNA SIRCILLA",
    case_type: "IA 1/2023(Direction Petition)",
  },
];

export const LegalSections = [
  { name: "Office Procedure (OP)", value: "OP" },
  { name: "Municipal Administration (MA)", value: "MA" },
  { name: "Town Planning & Environment (TP&E)", value: "TP&E" },
  { name: "Greater Hyderabad Municipal Corporation (GHMC)", value: "GHMC" },
  { name: "Budget", value: "budget" },
  { name: "General", value: "general" },
  { name: "Engineering (Engg.)", value: "Engg" },
  { name: "Planning – I", value: "planning_i" },
  { name: "Planning – II", value: "planning_ii" },
  { name: "Planning – III", value: "planning_iii" },
  { name: "Vigilance – I", value: "vigilance_i" },
  { name: "Vigilance – II", value: "vigilance_ii" },
  { name: "Vigilance – III", value: "vigilance_iii" },
];

export const Zones = [
  { name: "KHAIRATHABAD", value: "khairathabad" },
  { name: "KUKATPALLY", value: "kukatpally" },
  { name: "SERILINGAMPALLY", value: "serilingampally" },
  { name: "CHARMINAR", value: "charminar" },
  { name: "SECUNDERABAD", value: "secunderabad" },
  { name: "LB NAGAR", value: "lb_nagar" },
];

export const Circles = [
  { name: "KAPRA", value: "kapra" },
  { name: "UPPAL", value: "uppal" },
  { name: "HAYATH NAGAR", value: "hayath_nagar" },
  { name: "LB NAGAR", value: "lb_nagar" },
  { name: "SAROOR NAGAR", value: "saroor_nagar" },
  { name: "MALAKPET", value: "malakpet" },
  { name: "SANTOSH NAGAR", value: "santosh_nagar" },
  { name: "CHANDRAYANGUTTA", value: "chandrayangutta" },
  { name: "CHARMINAR", value: "charminar" },
  { name: "FALAKNUMA", value: "falaknuma" },
  { name: "RAJENDRANAGAR", value: "rajendranagar" },
  { name: "MEHDIPATNAM", value: "mehdipatnam" },
  { name: "KARWAN", value: "karwan" },
  { name: "GOSHAMAHAL", value: "goshamahal" },
  { name: "MUSHEERABAD", value: "musheerabad" },
  { name: "AMBERPET", value: "amberpet" },
  { name: "KHAIRATABAD", value: "khairatabad" },
  { name: "JUBILEE HILLS", value: "jubilee_hills" },
  { name: "YOUSUFGUDA", value: "yousufguda" },
  { name: "SERILINGAMPALLY", value: "serilingampally" },
  { name: "CHANDA NAGAR", value: "chanda_nagar" },
  {
    name: "RAMACHANDRA PURAM and PATANCHERUVU",
    value: "ramachandra_puram_and_patancheruvu",
  },
  { name: "MOOSAPET", value: "moosapet" },
  { name: "KUKATPALLY", value: "kukatpally" },
  { name: "QUTBULLAPUR", value: "qutbullapur" },
  { name: "GAJULARAMARAM", value: "gajularamaram" },
  { name: "ALWAL", value: "alwal" },
  { name: "MALKAJGIRI", value: "malkajgiri" },
  { name: "SECUNDERABAD", value: "secunderabad" },
  { name: "BEGUMPET", value: "begumpet" },
];

export const HODs = [
  { name: "ADMINISTRATION", value: "administration" },
  { name: "ELECTIONS", value: "elections" },
  { name: "ESTATES", value: "estates" },
  { name: "EVDM", value: "evdm" },
  { name: "FINANCE", value: "finance" },
  { name: "HEALTH", value: "health" },
  { name: "SANITATION", value: "sanitation" },
  { name: "VETERINARY", value: "veterinary" },
  { name: "ENTOMOLOGY", value: "entomology" },
  { name: "LAKES", value: "lakes" },
  { name: "LWS", value: "lws" },
  { name: "UCD", value: "ucd" },
  { name: "ELECTRICAL", value: "electrical" },
  { name: "UBD", value: "ubd" },
  { name: "ADVERTISEMENT", value: "advertisement" },
  { name: "TOWN PLANNING", value: "town_planning" },
  { name: "REVENUE", value: "revenue" },
  { name: "LEGAL", value: "legal" },
  { name: "HOUSING(E)", value: "housing_e" },
  { name: "SRDP(E)", value: "srdp_e" },
  { name: "CRMP(E)", value: "crmp_e" },
  { name: "MAINTANANCE(E)", value: "maintanance_e" },
  { name: "PROJECTS(E)", value: "projects_e" },
  { name: "SNDP(E)", value: "sndp_e" },
  { name: "LAND ACQUISITION", value: "land_acquisition" },
  { name: "SECRETARY", value: "secretary" },
  { name: "SPORTS", value: "sports" },
  { name: "TRANSPORTATION", value: "transportation" },
  { name: "IT", value: "it" },
  { name: "ADMINISTRATION(E)", value: "administration_e" },
  { name: "VIG(ADMINISTRATION)", value: "vig_administration" },
];

export const Respondents = [
  { label: "HOD", value: "hod" },
  {
    label: "ASO",
    value: "aso",
  },
  { label: "SO", value: "so" },
  {
    label: "AS/DS",

    value: "as_ds",
  },
  { label: "AD", value: "ad" },
  {
    label: "Spl.S",
    value: "spl_secretary",
  },
  { label: "P.S", value: "ps" },
];

export const Statuses = [
  { name: "ADMISSION STAGE", value: "admission_stage" },
  { name: "FOR COUNTER", value: "for_counter" },
  { name: "INTERIM ORDER ISSUED", value: "interim_order_issued" },
  { name: "STATUS QUO ORDER ISSUED", value: "status_quo_order_issued" },
  { name: "DISPOSED WITH DIRECTION", value: "disposed_with_direction" },
  { name: "STATUS NOT UPDATED", value: "status_not_updated" },
  { name: "CLOSED", value: "closed" },
  { name: "DISPOSED", value: "disposed" },
  { name: "DISMISSED", value: "dismissed" },
];
export const Designations = [
  { name: "HOD-Deparment", value: "hod_deparment" },
  {
    name: "ASO-Assistant Section Officer",
    value: "aso_assistant_section_officer",
  },
  { name: "SO-Section office", value: "so_section_office" },
  {
    name: "AS/DS-Assistant Sectatry/Deputy Secretary",
    value: "as_ds_assistant_sectatry_deputy_secretary",
  },
  { name: "AD- Additional  Secretary", value: "ad_additional_secretary" },
  {
    name: "Spl.Secretary- Special Secretary",
    value: "spl_secretary_special_secretary",
  },
  { name: "P.S- Principal Secretary", value: "ps_principal_secretary" },
];
