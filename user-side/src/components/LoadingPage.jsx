import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingPage() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: "99999",
        backgroundImage:
          "linear-gradient(228deg, rgba(0, 44, 170, 1) 0%, rgba(249, 249, 249, 1) 35%, rgba(255, 127, 80, 0.71) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
      <ClipLoader color="#2b3138ff" size={60} />
    </div>
  );
}
