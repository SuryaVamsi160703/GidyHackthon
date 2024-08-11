// exam.js
import React from 'react';
import './exam.css';

const resources = [
  { name: 'LeetCode - Java', url: 'https://leetcode.com/problemset/all/?tags=java' },
  { name: 'HackerRank - Java', url: 'https://www.hackerrank.com/domains/tutorials/10-days-of-java' },
  { name: 'CodeChef - Java', url: 'https://www.codechef.com/tags/problems/java' },
  { name: 'Codeforces - Java', url: 'https://codeforces.com/' },
  { name: 'GeeksforGeeks - Java Programming', url: 'https://www.geeksforgeeks.org/java/' },
  { name: 'InterviewBit - Java', url: 'https://www.interviewbit.com/java/' },
  { name: 'TopCoder - Java', url: 'https://www.topcoder.com/challenges?filter=java' },
  { name: 'Exercism - Java', url: 'https://exercism.io/tracks/java' },
  { name: 'SoloLearn - Java', url: 'https://www.sololearn.com/Course/Java/' },
  { name: 'CodinGame - Java', url: 'https://www.codingame.com/start' },
  { name: 'FreeCodeCamp - HTML/CSS/JavaScript', url: 'https://www.freecodecamp.org/' },
  { name: 'W3Schools - HTML/CSS/JavaScript', url: 'https://www.w3schools.com/' },
  { name: 'MDN Web Docs - HTML/CSS/JavaScript', url: 'https://developer.mozilla.org/' },
  { name: 'CodePen - HTML/CSS/JavaScript', url: 'https://codepen.io/' },
  { name: 'JSFiddle - JavaScript', url: 'https://jsfiddle.net/' },
  { name: 'CSS-Tricks', url: 'https://css-tricks.com/' },
  { name: 'Front-End Mentor', url: 'https://www.frontendmentor.io/' },
  { name: 'CodeSandbox - JavaScript', url: 'https://codesandbox.io/' },
  { name: 'SoloLearn - HTML/CSS/JavaScript', url: 'https://www.sololearn.com/' },
  { name: 'Plunker - JavaScript', url: 'https://plnkr.co/' },
  { name: 'The Odin Project - Full Stack JavaScript', url: 'https://www.theodinproject.com/paths/full-stack-javascript' },
  { name: 'Codecademy - Learn Node.js', url: 'https://www.codecademy.com/learn/learn-node-js' },
  { name: 'MongoDB University', url: 'https://university.mongodb.com/' },
  { name: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
  { name: 'Express.js Documentation', url: 'https://expressjs.com/' },
  { name: 'Node.js Documentation', url: 'https://nodejs.org/en/docs/' },
  { name: 'FreeCodeCamp - Full Stack', url: 'https://www.freecodecamp.org/' },
  { name: 'Egghead.io - React', url: 'https://egghead.io/' },
  { name: 'Scrimba - React', url: 'https://scrimba.com/learn/learnreact' },
  { name: 'Dev.to - MERN Stack', url: 'https://dev.to/t/mern' },
  { name: 'LeetCode - All Languages', url: 'https://leetcode.com/' },
  { name: 'HackerRank - All Domains', url: 'https://www.hackerrank.com/' },
  { name: 'CodeChef - All Languages', url: 'https://www.codechef.com/' },
  { name: 'TopCoder - All Domains', url: 'https://www.topcoder.com/' },
  { name: 'Codewars', url: 'https://www.codewars.com/' },
  { name: 'Project Euler', url: 'https://projecteuler.net/' },
  { name: 'AtCoder', url: 'https://atcoder.jp/' },
  { name: 'Kaggle - Code Competitions', url: 'https://www.kaggle.com/competitions' },
  { name: 'SPOJ (Sphere Online Judge)', url: 'https://www.spoj.com/' },
  { name: 'CodeSignal', url: 'https://codesignal.com/' },
  { name: 'Traversy Media - YouTube', url: 'https://www.youtube.com/user/TechGuyWeb' },
  { name: 'The Net Ninja - YouTube', url: 'https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg' },
  { name: 'CS50 - Harvard\'s Free Course', url: 'https://cs50.harvard.edu/' },
  { name: 'CodeAcademy - Web Development', url: 'https://www.codecademy.com/learn/paths/web-development' },
  { name: 'Udemy - Web Development Courses', url: 'https://www.udemy.com/courses/search/?q=web%20development' },
  { name: 'Coursera - Web Development Specialization', url: 'https://www.coursera.org/specializations/web-design' },
  { name: 'LinkedIn Learning - Web Development', url: 'https://www.linkedin.com/learning/topics/web-development' },
  { name: 'MDN Web Docs - Tutorials', url: 'https://developer.mozilla.org/en-US/docs/Learn' },
  { name: 'SoloLearn - JavaScript and Front-End', url: 'https://www.sololearn.com/' },
  { name: 'Building Full-Stack Applications with MERN', url: 'https://www.fullstackopen.com/en/' },
];

const Exam = () => {
  return (
    <>
    <div className="exam-container">
      <h1>Exam Preparation Resources</h1>
      <ul className="resource-list">
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
      
    </div>
    <div style={{ marginTop: "20px", fontStyle: "italic", color: "gray" }}>
        Apologies for the inconvenience, but due to time constraints, some
        features are not include have done my best to address the key aspects.
      </div>
    </>
  );
};

export default Exam;
