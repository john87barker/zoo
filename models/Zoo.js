import ArcticWolf from "./a.js";
import Bandicoot from "./b.js";
import Caiman from "./c.js";
import Dingo from "./d.js";
import Emu from "./e.js";
import FennecFox from "./f.js";
import Gharial from "./g.js";
import HornShark from "./h.js";
import IndianElephant from "./i.js";
import Jerboa from "./j.js";
import Krill from "./k.js";
import Lobster from "./l.js";
import Manatee from "./m.js";
import Narwhal from "./n.js";
import Octopus from "./o.js";
import PeregrineFalcon from "./p.js";
import Quetzal from "./q.js";
import RedSquirrel from "./r.js";
import SaberToothTiger from "./s.js";
import Tapir from "./t.js";
import Utonagan from "./u.js";
import Vulture from "./v.js";
import Warthog from "./w.js";
import Xerus from "./x.js";
import Yak from "./y.js";
import Zorse from "./z.js";

let zoo = {
  Aquarium: {
    Lobster: new Lobster('Vinny', 'red', 15, 'crestacean', 14, 'na', 'water', false, 1),
    Krill: new Krill('Kenny', 'clear', 1, 'crestacean', .5, 'na', 'water', false, 1)
 },

 BirdCage: {
  Vulture: new Vulture('Valentine', 'yellow', 15, 'bird', 14, 'na', 'sky', true, 12),
  PeregrineFalcon: new PeregrineFalcon('Susan', 'black', 112, 'bird', 14, 'na', 'sky', true, 12),
  Quetzal: new Quetzal('Bob', 'green', 15, 'bird', 14, 'na', 'sky', true, 12),
  Emu: new Emu('Fabio', 'grey', 60, 'bird', 98, 'na', 'sky', true, 12)
},

 River: {
   Caiman: new Caiman('Mikey', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30),
   Gharial: new Gharial('Emily', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30)
},
  Tank: {
   HornShark: new HornShark('Karen', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30),
    Manatee: new Manatee('Kareem', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30),
    Narwhal: new Narwhal('Micky', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30),
  Octopus: new Octopus('Minnie', 'grey', 2000, 'reptile', 180, 'sharp', 'water', false, 30)
},

  smallMammals: {
    Bandicoot: new Bandicoot('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    Dingo: new Dingo('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    FennecFox: new Caiman('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    Jerboa: new Jerboa('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    RedSquirrel: new RedSquirrel('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    Utonagan: new Utonagan('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
    Xerus: new Xerus('Mikey', 'grey', 2000, 'small mammal', 180, 'sharp', 'anywhere', false, 30),
  },
 Grassland: {
   IndianElephant: new IndianElephant('Willy', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
   Tapir: new Tapir('Betty', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
   Warthog: new Warthog('Pumba', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
   Yak: new Yak('Yakkity', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
   Zorse: new Zorse('Doug', 'grey', 2000, 'Large Mammal', 180, 'flat', 'grassland', false, 30),
},
 PreditorDen:{
   ArcticWolf: new ArcticWolf('Joey', 'grey', 2000, 'preditor', 180, 'sharp', 'forests', false, 30),
   SaberToothTiger: new SaberToothTiger('Sabine', 'grey', 2000, 'preditor', 180, 'sharp', 'forests', false, 30),
   
}
}
export default class { Zoo }