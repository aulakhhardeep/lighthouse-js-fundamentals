const judgeVegetable = (vegetables, metric) => {
  return vegetables.reduce((contender, vegetable) => {
    if (!contender || contender[metric] < vegetable[metric]) {
      contender = vegetable;
    }

    return contender;
  }, null).submitter;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)