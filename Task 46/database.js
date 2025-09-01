let students = [
  { name: "Varun Gupta", dob: "2000-12-14" },
  { name: "Sneha Kulkarni", dob: "2003-03-07" },
  { name: "Vikram Yadav", dob: "2005-11-21" },
  { name: "Pooja Reddy", dob: "2001-08-13" },
  { name: "Manish Tiwari", dob: "2002-07-29" },
  { name: "Divya Choudhary", dob: "2004-05-06" },
  { name: "Rahul Bhatia", dob: "2003-12-19" },
  { name: "Meera Saxena", dob: "2000-01-10" },
  { name: "Amit Dubey", dob: "2002-09-25" },
  { name: "Shreya Mishra", dob: "2005-06-17" },
  { name: "Harsh Vora", dob: "2003-04-08" },
  { name: "Kavya Jain", dob: "2001-03-03" },
  { name: "Nikhil Kapoor", dob: "2004-10-26" },
  { name: "Tanvi Sethi", dob: "2002-12-31" },
  { name: "Aarav Sharma", dob: "2002-03-15" },
  { name: "Isha Patel", dob: "2004-07-22" },
  { name: "Rohan Mehta", dob: "2001-11-05" },
  { name: "Simran Kaur", dob: "2003-01-19" },
  { name: "Arjun Verma", dob: "2000-09-10" },
  { name: "Priya Nair", dob: "2005-06-30" },
  { name: "Kabir Singh", dob: "2002-12-25" },
  { name: "Neha Joshi", dob: "2004-04-02" },
  { name: "Aditya Rao", dob: "2003-08-11" },
  { name: "Ananya Deshmukh", dob: "2001-10-09" },
  { name: "Karan Malhotra", dob: "2002-05-18" },
  { name: "Riya Banerjee", dob: "2004-02-27" },
  { name: "Siddharth Chauhan", dob: "2000-07-14" },
  { name: "Aditi Agarwal", dob: "2003-09-01" },
  { name: "Yash Thakur", dob: "2001-11-28" },
  { name: "Pallavi Menon", dob: "2004-08-23" },
  { name: "Rajat Ghosh", dob: "2002-06-09" },
  { name: "Maya Bansal", dob: "2000-04-19" },
  { name: "Ashwin Iyer", dob: "2003-05-30" },
  { name: "Sanya Chawla", dob: "2001-12-07" },
  { name: "Omkar Pawar", dob: "2002-01-25" },
  { name: "Vidhi Arora", dob: "2004-03-16" },
  { name: "Parth Khanna", dob: "2003-10-11" },
  { name: "Anjali Pillai", dob: "2001-02-05" },
  { name: "Rudra Rathi", dob: "2005-09-28" },
  { name: "Charu Sharma", dob: "2002-11-15" },
  { name: "Deepak Mathur", dob: "2000-06-04" },
  { name: "Krisha Shetty", dob: "2003-07-21" },
  { name: "Arnav Saxena", dob: "2001-09-13" },
  { name: "Bhavna Desai", dob: "2002-02-19" },
  { name: "Sameer Khan", dob: "2004-12-05" },
  { name: "Lavanya Reddy", dob: "2003-01-29" },
  { name: "Mohit Sinha", dob: "2001-05-12" },
  { name: "Jiya Srivastava", dob: "2002-08-08" },
  { name: "Tushar Anand", dob: "2000-10-02" },
  { name: "Ritika Goyal", dob: "2005-07-27" }
];

function calculateAge(userDob) {
    let dob = new Date(userDob);
    let currentDate = new Date();

    let difference = currentDate.getTime() - dob.getTime();
    let seconds = difference / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let years = days / 365;

    let y = Math.floor(years);
    let d = Math.floor(days % 365);
    let m = Math.floor(minutes % (24 * 60));

    return `${y} years : ${d} days : ${m} minutes`;
}

students.sort((a, b) => new Date(b.dob) - new Date(a.dob));//sorting

students.forEach(s => {
    console.log(`${s.name} | DOB: ${s.dob} | Age: ${calculateAge(s.dob)}`);//Printing
});