export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Client State</td>
            <td align="center">3/3/21</td>
            <td align="right">82</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Node.js</td>
            <td align="center">3/10/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">REST APIs</td>
            <td align="center">3/17/21</td>
            <td align="right">86</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">MongoDB</td>
            <td align="center">3/24/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Mongoose</td>
            <td align="center">3/31/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Deployment</td>
            <td align="center">4/7/21</td>
            <td align="right">90</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">88.6</td>
          </tr>
        </tfoot>
      </table>
      <h5>My weekly schedule</h5>
      <table id="wd-your-table" border={1}>
        <thead>
          <tr>
            <th align="center">Day</th>
            <th>Activity</th>
            <th align="center">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">Monday</td>
            <td>CS5610 Web Development</td>
            <td align="center">6:00 - 9:30 PM</td>
          </tr>
          <tr>
            <td align="center">Tuesday</td>
            <td>NDD Lab Meeting</td>
            <td align="center">11:30 AM - 1:00 PM</td>
          </tr>
          <tr>
            <td align="center">Thursday</td>
            <td>Movie: Digger</td>
            <td align="center">Night</td>
          </tr>
          <tr>
            <td align="center">Friday</td>
            <td>Data Core & Tech Dev</td>
            <td align="center">11:00 AM - 12:00 PM</td>
          </tr>
          <tr>
            <td align="center" rowSpan={2}>
              Saturday
            </td>
            <td>Bike test ride</td>
            <td align="center">2:00 - 3:00 PM</td>
          </tr>
          <tr>
            <td>Movie night: Avengers</td>
            <td align="center">6:00 - 10:00 PM</td>
          </tr>
          <tr>
            <td align="center">Sunday</td>
            <td>Dinner</td>
            <td align="center">7:00 - 9:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}