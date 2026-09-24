export default function YourForm() {
  return (
    <>
      <h4>Student Profile</h4>
      <form id="wd-your-form">
        <label htmlFor="wd-your-first-name">First name:</label>
        <input id="wd-your-first-name" defaultValue="Arul" />
        <br />
        <label htmlFor="wd-your-last-name">Last name:</label>
        <input id="wd-your-last-name" defaultValue="Agarwal" />
        <br />
        <label htmlFor="wd-your-student-id">Student ID:</label>
        <input id="wd-your-student-id" defaultValue="002319610" />
        <br />
        <label htmlFor="wd-your-bio">Bio:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={50}
          rows={4}
          defaultValue="I am a graduate student at Northeastern University in Boston, originally from India. I come from a background in mobile app development, and I am taking this course to learn the nuances of web development."
        />
        <br />
        <label>Class standing:</label>
        <br />
        <input type="radio" name="your-standing" id="wd-your-freshman" />
        <label htmlFor="wd-your-freshman">Freshman</label>
        <input type="radio" name="your-standing" id="wd-your-sophomore" />
        <label htmlFor="wd-your-sophomore">Sophomore</label>
        <input type="radio" name="your-standing" id="wd-your-junior" />
        <label htmlFor="wd-your-junior">Junior</label>
        <input type="radio" name="your-standing" id="wd-your-senior" />
        <label htmlFor="wd-your-senior">Senior</label>
        <input
          type="radio"
          name="your-standing"
          id="wd-your-graduate"
          defaultChecked
        />
        <label htmlFor="wd-your-graduate">Graduate</label>
        <br />
        <label>Enrollment:</label>
        <br />
        <input type="radio" name="your-enrollment" id="wd-your-part-time" />
        <label htmlFor="wd-your-part-time">Part time</label>
        <input
          type="radio"
          name="your-enrollment"
          id="wd-your-full-time"
          defaultChecked
        />
        <label htmlFor="wd-your-full-time">Full time</label>
        <br />
        <label>Languages I speak:</label>
        <br />
        <input
          type="checkbox"
          name="your-languages"
          id="wd-your-english"
          defaultChecked
        />
        <label htmlFor="wd-your-english">English</label>
        <input
          type="checkbox"
          name="your-languages"
          id="wd-your-french"
          defaultChecked
        />
        <label htmlFor="wd-your-french">French</label>
        <input
          type="checkbox"
          name="your-languages"
          id="wd-your-hindi"
          defaultChecked
        />
        <label htmlFor="wd-your-hindi">Hindi</label>
        <br />
        <label htmlFor="wd-your-major">Major:</label>
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="SES">Software Engineering Systems</option>
          <option value="IS">Information Systems</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">Topics I want to go deeper on:</label>
        <br />
        <select
          id="wd-your-topics"
          multiple
          defaultValue={["REACT", "TYPESCRIPT"]}
        >
          <option value="REACT">React</option>
          <option value="NEXTJS">Next.js</option>
          <option value="NODE">Node.js and Express</option>
          <option value="MONGODB">MongoDB</option>
          <option value="TYPESCRIPT">TypeScript</option>
          <option value="TAILWIND">Tailwind CSS</option>
        </select>
        <br />
        <label htmlFor="wd-your-email">School email:</label>
        <input
          type="email"
          id="wd-your-email"
          defaultValue="agarwal.arul@northeastern.edu"
        />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
        <input
          type="number"
          id="wd-your-grad-year"
          defaultValue={2026}
          min={2026}
          max={2030}
        />
        <br />
        <label htmlFor="wd-your-start-date">Program start date:</label>
        <input type="date" id="wd-your-start-date" defaultValue="2025-01-06" />
        <br />
        <label htmlFor="wd-your-excitement">
          Excitement about this course (0-10):
        </label>
        <input
          type="range"
          id="wd-your-excitement"
          defaultValue={8}
          min={0}
          max={10}
        />
        <br />
        <button id="wd-your-save" type="submit">
          Save
        </button>
        <button id="wd-your-cancel" type="button">
          Cancel
        </button>
      </form>
    </>
  );
}
