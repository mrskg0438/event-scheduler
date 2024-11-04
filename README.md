<ul>
  <li>This is a Event Scheduling App</li>
  <li>Using this User can add their event without overlaping exsiting event</li>
</ul>
<h2>Thought Process:</h2>
<ul>
  <li>
    First i create app services file in my angular project. This file contains two methods:
    <ol>
      <li>addEvent(): which return false if any overlapping event found else return true and add event in array of event</li>
      <li>getEvent(): it returns event array</li>
    </ol>
  </li>
  <li>
    I craeted an component for modal form which takes user inputs and call method from app services
  </li>
  <li>
    I used main app component for the listig of events
  </li>
</ul>
