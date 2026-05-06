// import { useEffect, useState } from "react";

// // Helper: generate a random string (for the code verifier)
// function generateRandomString(length) {
//   const possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let text = "";
//   for (let i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// }

// // Helper: perform a SHA-256 hash on the given string
// async function sha256(plain) {
//   const encoder = new TextEncoder();
//   const data = encoder.encode(plain);
//   const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
//   return new Uint8Array(hashBuffer);
// }

// // Helper: Base64 URL-encode the hashed buffer
// function base64encode(arrayBuffer) {
//   let string = "";
//   const bytes = new Uint8Array(arrayBuffer);
//   for (let i = 0; i < bytes.byteLength; i++) {
//     string += String.fromCharCode(bytes[i]);
//   }
//   return btoa(string)
//     .replace(/\+/g, "-")
//     .replace(/\//g, "_")
//     .replace(/=+$/, "");
// }

// const useSpotifyPKCE = () => {
//   const [authCode, setAuthCode] = useState(null);

//   useEffect(() => {
//     async function initiateAuth() {
//       // Check if the URL contains the Spotify auth code
//       const queryParams = new URLSearchParams(window.location.search);
//       const code = queryParams.get("code");

//       if (code) {
//         // If code exists, store it in state
//         setAuthCode(code);
//       } else {
//         // No auth code; generate the code verifier and challenge
//         const codeVerifier = generateRandomString(128);
//         const hashed = await sha256(codeVerifier);
//         const codeChallenge = base64encode(hashed);

//         // Save the code verifier locally for later use during token exchange
//         window.localStorage.setItem("code_verifier", codeVerifier);

//         // Spotify authorization details
//         const clientId = "fcd437e2ca6341bcae4b3dd4f858300d";
//         const redirectUri = "https://www.vincentqi.dev/";
//         const scope = "user-read-private user-read-email";

//         // Build the Spotify authorization URL with the PKCE parameters
//         const authUrl = new URL("https://accounts.spotify.com/authorize");
//         const params = {
//           response_type: "code",
//           client_id: clientId,
//           scope: scope,
//           redirect_uri: redirectUri,
//           code_challenge_method: "S256",
//           code_challenge: codeChallenge,
//         };

//         authUrl.search = new URLSearchParams(params).toString();

//         // Redirect the user to Spotify's authorization endpoint
//         window.location.href = authUrl.toString();
//       }
//     }

//     initiateAuth();
//   }, []);

//   return authCode;
// };

// export default useSpotifyPKCE;
