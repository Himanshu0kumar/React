const Footer = () => {
  return (
    <div className="bg-[#1c1e21] text-white">
      <div className=" flex justify-between p-6 px-32 leading-10">
        <div>
          <h3 className="font-bold">Docs</h3>
          <a href="#">Tutorial</a>
        </div>
        <div>
          <h3 className="font-bold">Community</h3>
          <ul>
            <a href="#">
              <li>Stack Overflow</li>
            </a>
            <a href="#">
              <li>Discord</li>
            </a>
            <a href="#">
              <li>Twitter</li>
            </a>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">More</h3>
          <ul>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>GitHub</li>
            </a>
          </ul>
        </div>
      </div>
      <p className="flex justify-center pb-6">Copyright © 2022 My Project, Inc. Built with Docusaurus.</p>
    </div>
  );
};
export default Footer;
