// Function to assign values to grades and calculate average
function calculateAverageAndRender(data, container) {
  // Map through the courses to calculate CGPA
  const gradesArray = data.map(course => {
    const gradeValues = {
      'A': 5,
      'B': 4,
      'C': 3,
      'D': 2,
      'E': 1,
      'F': 0
    };

    // Split grades if multiple grades are provided
    const grades = course.grade.split(',').map(grade => grade.trim());
    const units = parseInt(course.unit);

    // Calculate total grade points for each course
    const totalGradePoints = grades.reduce((total, grade) => total + gradeValues[grade], 0);

    // Calculate average for each course
    const average = units !== 0 ? totalGradePoints / units : 0;
    return average;
  });

  // Calculate overall average
  const overallAverage = gradesArray.reduce((total, average) => total + average, 0) / gradesArray.length;

  // Render average under the table
  container.innerHTML += `<p>CGPA: ${overallAverage.toFixed(2)}</p>`;
}

// Function to generate the transcript table
let count = 1;
function generateTranscriptTable(data, container) {
  var tableHtml = `
  <section class="transcript-table">
  <div style="width:100%; border:solid; border-width:1px; border-color:grey; width: 114px; padding-left:3px; height:30px;">
    <h3 style="margin-bottom: 5px; margin-top:0px;">YEAR ${count}</h3>
  </div>
  <table style="width: 100%;">
    <thead>
      <tr>
        <th style="width: 40%;">Course Title</th>
        <th style="width: 20%;">Course Code</th>
        <th style="width: 20%;">Course Unit</th>
        <th style="width: 20%;">Grade</th>
      </tr>
    </thead>
    <tbody>
  `;

  // Loop through the data and generate rows for each course
  data.forEach(course => {
    tableHtml += `
      <tr>
        <td>${course.title}</td>
        <td>${course.code}</td>
        <td>${course.unit}</td>
        <td>${course.grade}</td>
      </tr>
    `;
  });

  // Close table and section tags
  tableHtml += `
        </tbody>
      </table>
    </section>
  `;

  // Append the generated table to the container
  container.innerHTML += tableHtml;

  // Calculate average and render under the table
  calculateAverageAndRender(data, container);

  // Increment count for the next table
  count++;
}

// Sample data for transcript tables
var sampleData = [
  [
    { title: "Course Title 1", code: "C001", unit: "3", grade: "A" },
    { title: "Course Title 2", code: "C002", unit: "4", grade: "B" },
    { title: "Course Title 2", code: "C002", unit: "4", grade: "C" },
    { title: "Course Title 2", code: "C002", unit: "4", grade: "D" },
    { title: "Course Title 2", code: "C002", unit: "4", grade: "E" },
    { title: "Course Title 2", code: "C002", unit: "4", grade: "F" },
    { title: "Course Title 2", code: "C002", unit: "4", grade: "A" }
  ],
  [
    { title: "Course Title 3", code: "C003", unit: "3", grade: "B" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" }
  ],
  [
    { title: "Course Title 3", code: "C003", unit: "3", grade: "B" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" }
  ],
  [
    { title: "Course Title 3", code: "C003", unit: "3", grade: "B" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" },
    { title: "Course Title 4", code: "C004", unit: "4", grade: "A" }
  ]
];

// Get the container where transcript tables will be appended
var tablesContainer = document.querySelector('.transcript-tables');

// Generate transcript tables
sampleData.forEach(data => {
  generateTranscriptTable(data, tablesContainer);
});
 