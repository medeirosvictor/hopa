import { useState, useRef } from "react";

function AddApparel() {
    const classes = {
        uploadPictureInput:
            "border border-black p-1 cursor-pointer max-w-[200px]",
        takePictureInput:
            "border border-black p-1 cursor-pointer max-w-[200px]",
        buttonWrapper: "flex flex-col justify-center items-center gap-2 my-2",
    };

    // in case we are only uploading one apparel
    const [apparels, setApparels] = useState([]);

    const [photo, setPhoto] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.error("Error accessing the camera: ", error);
        }
    };

    const takePicture = () => {
        const context = canvasRef.current.getContext("2d");
        context.drawImage(
            videoRef.current,
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
        );
        setPhoto(canvasRef.current.toDataURL("image/png"));
    };

    return (
        <div>
            <div>
                Tirar foto agora ou escolher do celular/pc{" "}
                <div> permitir selecionar varias fotos de uma vez so tbm</div>{" "}
                <div className={classes.buttonWrapper}>
                    <div>
                        <label
                            className={classes.uploadPictureInput}
                            htmlFor="upload-picture"
                        >
                            Upload de Foto
                        </label>
                        <input
                            id="upload-picture"
                            className="hidden"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => {
                                console.log(e.target.files);
                                setApparels(e.target.files);
                            }}
                        />{" "}
                    </div>
                    <div>
                        <label
                            className={classes.takePictureInput}
                            htmlFor="take-picture"
                        >
                            Tirar Foto
                        </label>
                        <input
                            id="take-picture"
                            className="hidden"
                            type="file"
                            accept="image/*"
                            capture="environment"
                            onChange={(e) => {
                                console.log(e.target.files);
                                setApparels(e.target.files);
                            }}
                        />{" "}
                    </div>
                </div>
                <div>
                    <h1>Add Apparel</h1>
                    <div>
                        <button onClick={startCamera}>Start Camera</button>
                        <button onClick={takePicture}>Take Picture</button>
                    </div>
                    <video
                        ref={videoRef}
                        autoPlay
                        style={{ display: photo ? "none" : "block" }}
                    />
                    <canvas
                        ref={canvasRef}
                        width="640"
                        height="480"
                        style={{ display: "none" }}
                    />
                    {photo && (
                        <div>
                            <h2>Preview:</h2>
                            <img src={photo} alt="Captured" />
                        </div>
                    )}
                </div>
            </div>

            <div>
                formulario para preencher sobre a peca no caso de ser unica
                (tamanho, marca, cor, tipo, preco e data de compra, etc...){" "}
            </div>
            <div>
                {" "}
                AI checkbox para pedir pra preencher os detalhes automaticamente
                (usar AI para reconhecer cada foto e qualificar)
            </div>
            <div>botao de salvar</div>
            <div>botao de cancelar</div>
        </div>
    );
}

export default AddApparel;
