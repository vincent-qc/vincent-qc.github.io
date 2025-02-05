import { useEffect } from "react";
import { base64encode, codeVerifier, sha256 } from "../../shared/spotify";
import CupMesh from "./cup";
import LaptopMesh from "./laptop";
import SwitchMesh from "./switch";

const LegMesh = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[1, 1, 11]} />
        <meshStandardMaterial color="#BBBBBB" />
      </mesh>
      <mesh position={[0, -6, 0]}>
        <cylinderGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
    </group>
  );
};

const DeskMesh = ({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) => {
  return (
    <group scale={scale} position={position} receiveShadow>
      {/* Top */}
      <mesh>
        <boxGeometry args={[38, 1, 18]} />
        <meshStandardMaterial color="#CCCCCC" />
      </mesh>

      {/* Legs */}
      <LegMesh position={[-17, -6, -6]} />
      <LegMesh position={[-17, -6, 6]} />
      <LegMesh position={[17, -6, 6]} />
      <LegMesh position={[17, -6, -6]} />
    </group>
  );
};

export default function OrganizedDeskMesh({
  scale,
  position,
}: {
  scale: [number, number, number];
  position: [number, number, number];
}) {
  useEffect(() => {
    async function fetchData() {
      const hashed = await sha256(codeVerifier);
      const codeChallenge = base64encode(hashed);

      const clientId = "fcd437e2ca6341bcae4b3dd4f858300d";
      const redirectUri = "https://www.vincentqi.dev/";

      const scope = "user-read-private user-read-email";
      const authUrl = new URL("https://accounts.spotify.com/authorize");

      // generated in the previous step
      window.localStorage.setItem("code_verifier", codeVerifier);

      const params = {
        response_type: "code",
        client_id: clientId,
        scope,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
        redirect_uri: redirectUri,
      };

      authUrl.search = new URLSearchParams(params).toString();
      window.location.href = authUrl.toString();

      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      const getToken = async (code: string) => {
        // stored in the previous step
        const codeVerifier = localStorage.getItem("code_verifier");

        if (!codeVerifier) {
          throw new Error("Code verifier is missing");
        }

        const payload = {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            client_id: clientId,
            grant_type: "authorization_code",
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier,
          }),
        };

        const body = await fetch(url, payload);
        const response = await body.json();

        localStorage.setItem("access_token", response.access_token);
      };
    }
    fetchData();
  }, []);
  return (
    <mesh position={position} scale={scale} receiveShadow>
      <DeskMesh scale={[1, 1, 1]} position={[0, 0, 0]} />
      <LaptopMesh scale={[0.35, 0.35, 0.35]} position={[0, 1.25, -5]} />
      <CupMesh scale={[0.5, 0.5, 0.5]} position={[10, 3, -3]} />
      <SwitchMesh
        scale={[0.45, 0.45, 0.45]}
        position={[-12, 2.5, -5]}
        rotation={Math.PI / 6}
      />
    </mesh>
  );
}
