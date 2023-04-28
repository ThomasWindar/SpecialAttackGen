const elementsArray = ['Ice', 'Metal', 'Wind', 'Fire', 'Water', 'Earth', 'Electric', 'Darkness', 'Holy', 'Light', 'Shadow'];
const attackTypeArray = ['Circle', 'Sequence', 'Chain Combination', 'Slash', 'Blow', 'Strike', 'Hit', 'Splash', 'Beam', 'Radiance', 'Flurry'];
const verbArray = ['Spammable', 'Savior\'s', 'Erupting', 'Blitzing', 'Shining', 'Destructive', 'Healing', 'Wounding', 'Slicing', 'Pummeling'];
let playerWeapon = 'Fist';

function ChooseRandomElement(arr) {
    let arrLength = arr.length;
    let randomSelectedElement = Math.floor(Math.random() * arrLength);
    return arr[randomSelectedElement];
}

function assembleAttackName() {
    let weaponName = document.getElementById('weaponBox').value;
    let rElement = ChooseRandomElement(elementsArray); 
    let rType = ChooseRandomElement(attackTypeArray);
    let rVerb = ChooseRandomElement(verbArray);

    document.getElementById("WeaponText").innerHTML=`Your Special Attack is the ${rVerb} ${rElement} ${weaponName} ${rType}!!!`;
}
