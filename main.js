const elementsArray = ['Ice', 'Metal', 'Wind', 'Fire', 'Water', 'Earth', 'Electric', 'Darkness', 'Holy', 'Light', 'Shadow', 'Erotic', 'Ground', 'Stench', 'Love', 'Sharp', 'Blunt', 'Rusty', 'Keen', 'Virtual', 'Digital', 'Electronic', 'Otherworldly', 'Sentient', 'Concrete'];
const attackTypeArray = ['Circle', 'Sequence', 'Chain Combination', 'Slash', 'Blow', 'Strike', 'Hit', 'Splash', 'Beam', 'Radiance', 'Flurry', 'of Justice', 'of Suffering', 'Tickling', 'Counterattack', 'Bashing', 'Smashing', 'of the Lady', 'Step', 'Somersault', 'Boomerang', 'of the Mind', 'Shakedown', 'Butchering', 'Slap', 'Slapping', 'Curse', 'Application', 'Tower', 'Raid', 'of Legends', 'of Spirit', 'of Heart', 'of Joe', 'Whip', 'Projectile', 'Beam', 'Attack', 'Strike', 'Kiss', 'Blast', 'Explosion', 'Genocide'];
const verbArray = ['Miracle', 'Spammable', 'Savior\'s', 'Erupting', 'Blitzing', 'Shining', 'Destructive', 'Healing', 'Wounding', 'Slicing', 'Pummeling', 'Destroyer\'s', 'Godly', 'Drunken', 'Misty', 'Unexpected', 'Voracious', 'Megafied', 'Hyper', 'Super', 'Outrageous', 'Crystaline', 'Crystalized', 'Cutsey', 'Waifu\'s', 'Husbando\'s', 'Chilly', 'Selective', 'Venomous', 'Poisonous', 'Reactive', 'Stupendous', 'Genociding', 'Vertical', 'Horizontal', 'Major', 'Assaulting', 'Eviscerating', 'Stabbing', 'Raising', 'Jumping', 'Spinning', 'Surivors', 'Prophetic', 'Cursed'];
const specialsArray = ['Recovers HP per hit', 'Empowers next hit', 'Increases Power by 15% for 10 seconds', 'Resets all cooldowns', 'Prevents enemy healing', 'Breaks enemy weapon', 'Gains a fish on kill', 'Mash Attack button for more hits', 'Decreases enemy accuracy by 50%', 'Stuns for 2 seconds', 'Applies a Slow debuff', 'Teleports behind the enemy', 'Speed boost for 12 sec', 'Causes bleeding', 'Pulls the target to you', 'Makes the target delicious', 'Attacks all enemies in a cone', 'Attacks all enemies in a line', 'Buffs all allies', 'Damage increases with each use within 20 seconds', 'Heals a random ally', 'Creates a random potion', 'Draws 3 cards', 'Reloads the shotgun', 'Next attack stuns 100%', 'Pushes an enemy away', 'Taunts an enemy', 'Taunts all enemies', 'Cannot be blocked', 'Penetrates defense', 'Decreases enemy attack power', 'Charms the target'];
const strongSpecialsArray = ['Doubles the drop rate and gold on kill', 'Summons an AfterImage that enemies attack for 5 seconds', 'Grants Invincibility for 2 seconds', 'Stuns all enemies', 'Grants Quad damage for 5 sec', 'Disconnects the enemy player', 'Revives all allies', 'Summons an undead army', 'Creates an inescapable arena around the fighters', 'Slows time for all enemies for 6 seconds', 'Next attack has no cooldown', 'All allies attack the target with you', 'Locks enemy skills for 10 seconds', 'All of your debuffs are applied on the target', 'Poisons, Burns and Freezes all enemies in that order', 'Turns the target to stone', 'All your animal companions are summoned for 30 sec', 'Sucks all enemies in a giant vortex of attacks', 'Builds a Fortress for your allies', 'Party memebers including you cannot be brought below 1 HP for 5 sec', 'Rewinds time by 3 seconds', 'Teleports you and all allies to safety', 'All enemies must dance with you', 'The enemy is forced to give you a gift', 'Mind Controls the target for 5 seconds', 'Destroys all Evil Artifacts in the vicinity', 'Charms all enemies'];
let spArray = specialsArray;



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

    document.getElementById("WeaponText").innerHTML = `Your Special Attack is the ${rVerb} ${rElement} ${weaponName} ${rType}!!!`;
    let attackValuesArray = determineAttackValues();
    let specialEffectChoice = ChooseRandomElement(spArray);


    document.getElementById("Damage").innerHTML = `${attackValuesArray[0]} dmg`;
    document.getElementById("HitsCount").innerHTML = `${attackValuesArray[1]}`;
    document.getElementById("Duration").innerHTML = `${attackValuesArray[2]} sec`;
    document.getElementById("Cooldown").innerHTML = `${attackValuesArray[3]} sec`;
    document.getElementById("SpecialFX").innerHTML = `${specialEffectChoice}`;
}

function determineAttackValues() {
    let BaseDamage = Math.floor(Math.random() * 100 + 1);
    let HitNumber = Math.floor(Math.random() * ((100 / BaseDamage) - 1) + 1);
    let Duration = Math.floor(Math.random() * 3 + 1);
    let TimesUsedToKill = Math.floor(100 / (BaseDamage * HitNumber));
    let Cooldown = 16;
    spArray = specialsArray;

    if (100 % (100 / (BaseDamage * HitNumber)) !== 0) {
        TimesUsedToKill += 1;
    }

    let TotalKillTime = TimesUsedToKill * Duration;

    if (TotalKillTime > 8) {
        // Use a stronger Special Effect Array
        spArray = strongSpecialsArray;

    } else {
        switch (TotalKillTime) {
            case 1:
                Cooldown = 8;
                break;
            case 2:
                Cooldown = 4;
                break;
            case 3:
                Cooldown = 3;
                break;
            case 4: 
                Cooldown = 2;
                break;
            default:
                Cooldown = 1;
                break;


        }
    }

    return [BaseDamage, HitNumber, Duration, Cooldown];




}
