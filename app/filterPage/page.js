'use client'

import CheckboxList from './filterSortIconComp';
import styles from "./filter.module.css";


const options = ['IT', 'Sjukvård', 'Skola', 'Transport']
const salary = ['25 0000 - 30 000', '31 000 - 36 000']
const remote = ['Ja', 'Nej', 'Delvis']
const profession = ['Läkare','Lärare', 'Sjuksköterska', 'Utvecklare', 'Taxichafför']

const MyPage = () => {
  const handleFilter = (checkedOptions) => {
  }

  return (
    <>
    <section className={`filterContainer ${styles.filterContent}`} >
    <div>
      <h3 className={styles.title}>Branch</h3>
      <CheckboxList className={styles.btn} options={options} onFilter={handleFilter} />
    </div>
    <div>
      <h2 className={styles.title}>Yrke</h2>
      <CheckboxList options={profession} onFilter={handleFilter} />
    </div>
    <div>
      <h2 className={styles.title}>Lönespann</h2>
      <CheckboxList options={salary} onFilter={handleFilter}/>
    </div>
    <div>
      <h2 className={styles.title}>Möjlighet att jobba på distans</h2>
      <CheckboxList options={remote} onFilter={handleFilter} />
    </div>
    <button className={`${styles.btn} ${styles.filterBtn}`} onClick={handleFilter}>Filtrera</button>
    </section>
    </>
  )
}

export default MyPage