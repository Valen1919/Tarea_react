import Button from "react-bootstrap/Button";
export default function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <>
      <div>
        <Button2 onClick={onPlayMovie}>
            Cargar pelicula
        </Button2>{ "  "}

        <Button2 onClick={onUploadImage}>
            Cargar Imagen
        </Button2>
      </div>
    </>
  );
}


function Button2({ onClick, children }) {
  return (
    <Button variant="success" onClick={onClick}>
      {children}
    </Button>
  );
}


