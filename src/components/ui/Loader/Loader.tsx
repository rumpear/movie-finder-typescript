import ClipLoader from "react-spinners/ClipLoader";

const styles = `
        display: block;
        margin: 0 auto;
        border-color: #0099ff;
      `;

export const Loader = () => {
  return <ClipLoader size={70} css={styles} />;
};
