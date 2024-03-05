export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Welcome to My Kitchen</h1>

        <nav>
          <ul>
            <li>
              <a href={`/kitchen`}>Kitchen...</a>
            </li>
            <li>
              <a href={`/testroute`}>Test Page</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
