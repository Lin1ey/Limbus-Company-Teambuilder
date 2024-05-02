import { Sin } from "../types/data";

/**
 * Gives sinner name based on their ID
 * @param id id of the sinner
 * @returns sinner's name as a string
 */
export function getSinnerFromID(id: number) {
  switch (id) {
    case 1:
      return "Yi Sang";
    case 2:
      return "Faust";
    case 3:
      return "Don Quixote";
    case 4:
      return "Ryoshu";
    case 5:
      return "Meursault";
    case 6:
      return "Hong Lu";
    case 7:
      return "Heathcliff";
    case 8:
      return "Ishmael";
    case 9:
      return "Rodian";
    case 10:
      return "Dante";
    case 11:
      return "Sinclair";
    case 12:
      return "Outis";
    case 13:
      return "Gregor";
    default:
      return "Invalid Sinner ID";
  }
}

/**
 * returns an array of jsons of the sinner's identities
 * @param sinnerId id number of the sinner
 * @returns promise of an array of jsons for the sinner's identities
 */
export async function getSinnerJSON(sinnerID: number) {
  let sinnerName = getSinnerFromID(sinnerID).replace(/\s/g, "").toLowerCase();
  let data = await fetch(`/sinners/${sinnerName}/identityData.json`).then((data) => data.json());
  return data;
}

/**
 * grabs the path for the sin in the public folder
 * @param sin the sin
 * @returns the path for the sin image file, returns unknown if not a valid sin
 */
export function getSinTypeImgPath(sin: Sin) {
  switch (sin) {
    case "Wrath":
      return "/assets/sins/Wrath.png";
    case "Lust":
      return "/assets/sins/Lust.png";
    case "Sloth":
      return "/assets/sins/Sloth.png";
    case "Gluttony":
      return "/assets/sins/Gluttony.png";
    case "Gloom":
      return "/assets/sins/Gloom.png";
    case "Pride":
      return "/assets/sins/Pride.png";
    case "Envy":
      return "/assets/sins/Envy.png";
    default:
      return "/assets/Unknown.png";
  }
}

/**
 * Returns the public path to get a sinner's image
 * @param sinnerName name of the sinner
 * @param sinnerIdentity name of the sinner's identity
 * @returns path to the sinner's identity image
 */
export function getSinnerImgPath(sinnerName: string, sinnerIdentity: string) {
  //removes spaces and '.' & lower cases the name
  const folderName = sinnerName.replace(/\s|\./g, "").toLowerCase();

  //removes spaces, '.', and ':'
  const imageName = sinnerIdentity.replace(/\s|\.|\:/g, "");
  return `/sinners/${folderName}/identities/${imageName}.webp`;
}
