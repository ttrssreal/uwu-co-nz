import Image from "next/image";
import uwuStyles from "../style/uwu-styles.module.css";

export default function Uwu() {
  return (
    <>
      <h1>UwU :3</h1>
      <Image
        className={uwuStyles.uwu}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/1024px-Stylized_uwu_emoticon.svg.png"
        alt="wuw..."
        width={1024}
        height={393}
      />
      <br></br>
      Art By <a href="https://commons.wikimedia.org/wiki/User:Elli" title="User:Elli">Elli</a> - <span className="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en" title="Creative Commons Zero, Public Domain Dedication">CC0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=97157746">Link</a>
      <br></br>
      CSS Animations - <a href="https://github.com/the-pixelgrapher">pixel</a>
    </>
  );
}
