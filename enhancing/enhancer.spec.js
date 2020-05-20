const enhancer = require('./enhancer.js');
// test away!
const array = [];
const emptyObject = {};
const weaponName = { name: "sword" };
const brokenWeapon = { name: "iron sword", durability: 5, enhancement: 5 };
const perfectWeapon = { name: "Holy Sword", durability: 100, enhancement: 20 };
const hackedWeapon = { name: "Hacked Sword", durability: 125, enhancement: 25 };
const negativeWeapon = { name: "Negative Weapon", durability: -1, enhancement: -1 };

describe('enhancer', () => {
    it("should take an object and return the same opject with a durability property of 100", () => {
        
        expect(enhancer.repair(brokenWeapon)).toStrictEqual({ ...brokenWeapon, durability: 100 });
        expect(enhancer.repair(perfectWeapon)).toStrictEqual({ message: "Item is in perfect condition."});
        expect(enhancer.repair(hackedWeapon)).toStrictEqual({ message: "Nice hacked weapon, cheater."});
        expect(enhancer.repair(negativeWeapon)).toStrictEqual({ message: "Nice hacked weapon, cheater."});
        expect(enhancer.repair(weaponName)).toBe(null);
        expect(enhancer.repair(array)).toBe(null);
        expect(enhancer.repair(emptyObject)).toBe(null);
        expect(enhancer.repair()).toBe(null);
    })

    it("should increase enhancement level by 1 if enchantment level is less than 20", () => {

        expect(enhancer.succeed(brokenWeapon)).toStrictEqual({ ...brokenWeapon, enhancement: brokenWeapon.enhancement + 1})
        expect(enhancer.succeed(perfectWeapon)).toStrictEqual({ message: "Item cannot be enhanced any further." });
        expect(enhancer.succeed(hackedWeapon)).toStrictEqual({ message: "Nice hacked weapon, cheater."});
        expect(enhancer.succeed(negativeWeapon)).toStrictEqual({ message: "Nice hacked weapon, cheater."});
        expect(enhancer.succeed(weaponName)).toBe(null);
        expect(enhancer.succeed(array)).toBe(null);
        expect(enhancer.succeed(emptyObject)).toBe(null);
        expect(enhancer.succeed()).toBe(null);
    })

    it("should decreace enhancement level by 5 if less than 15, by 10 if 15 or 16, by 1 if greater than 16", () => {
        const testWeapon1 = { name: "testWeapon1", durability: 100, enhancement: 10 };
        const testWeapon2 = { name: "testWeapon2", durability: 100, enhancement: 15 };
        const testWeapon3 = { name: "testWeapon3", durability: 100, enhancement: 17 }
        
        expect(enhancer.fail(brokenWeapon)).toStrictEqual({ ...brokenWeapon, enhancement: 0 });
        expect(enhancer.fail(testWeapon1)).toStrictEqual({ ...testWeapon1, enhancement: 5 });
        expect(enhancer.fail(testWeapon2)).toStrictEqual({ ...testWeapon2, enhancement: 5 });
        expect(enhancer.fail(testWeapon3)).toStrictEqual({ ...testWeapon3, enhancement: 16 });
        expect(enhancer.fail(perfectWeapon)).toStrictEqual({ message: "Item cannot be enhanced any further." });
        expect(enhancer.fail(hackedWeapon)).toStrictEqual({ message: "Nice hacked weapon, cheater."});
        expect(enhancer.fail(negativeWeapon)).toStrictEqual({ message: "Nice hacked weapon, cheater."});
        expect(enhancer.fail(weaponName)).toBe(null);
        expect(enhancer.fail(array)).toBe(null);
        expect(enhancer.fail(emptyObject)).toBe(null);
        expect(enhancer.fail()).toBe(null);
    })
})