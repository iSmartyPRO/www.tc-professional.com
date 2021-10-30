<template>
<ListServices
    title="ОБУЧЕНИЕ И АТТЕСТАЦИЯ<br />РУКОВОДИТЕЛЕЙ И СПЕЦИАЛИСТОВ"
    description="<p>
          Аттестация по охране труда обязательна для руководителей и
          специалистов.<br />
          В соответствии с требованиями ТК РФ работодатель обязан обеспечить
          обучение работника вопросам охраны труда <br />
          с последующей аттестацией (проверкой знаний).
        </p>"
    :list="eduManagers">
  </ListServices>
  <ListServices
    title="ОБУЧЕНИЕ И АТТЕСТАЦИЯ <br />РАБОЧИХ СПЕЦИАЛЬНОСТЕЙ"
    description="<p>
          Для большинства рабочих специальностей обязательна аттестация.<br>
          После нее сотрудник получает удостоверение и может официально трудоустроиться по профессии.
        </p>"
    :list="eduWorkers">
  </ListServices>
</template>

<script>
import ListServices from "../components/ListServices.vue"

import eduManagers from "../data/eduManagers.json"
import eduWorkers from "../data/eduWorkers.json"

export default {
  name: "Programs",
  components: {ListServices},
  data() {
    return {
      eduManagers,
      eduWorkers
    }

}
}
</script>

<style>

</style>