export type Sin = "Wrath" | "Lust" | "Sloth" | "Gluttony" | "Gloom" | "Pride" | "Envy" | "None";
export type DamageType = "Slash" | "Blunt" | "Pierce" | "None";
export type SkillType = "Attack" | "Guard" | "Evade" | "Counter";
export type PassiveType = "Owned" | "Res";

export interface SkillDesc {
  coin: number;
  details: String[];
}

export interface Skill {
  name: String;
  affinity: Sin;
  count: number;
  base: number;
  plus: number;
  coins: number;
  skillType: SkillType;
  damageType: DamageType;
  desc: SkillDesc[];
  atkWeight: number;
}

export interface PassiveSkill {
  name: string;
  affinity: Sin;
  cost: number;
  passiveType: PassiveType;
  desc: string[];
}

export interface Identity {
  sinnerID: number;
  name: string;
  rarity: 1 | 2 | 3;
  passive: PassiveSkill[];
  support: PassiveSkill[];
  skills: Skill[];
  statusKeywords: string[];
  sinKeywords: string[];
  damageKeywords: string[];
}
