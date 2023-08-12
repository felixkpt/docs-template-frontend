import usePermissions from '@/hooks/usePermissions'
import React, { useEffect } from 'react'

type Props = {}

const Index = (props: Props) => {

  const { can, testAbilities } = usePermissions();

  useEffect(() => {
    testAbilities(['ticket_create', 'lead_create'])
  }, [])

  return (
    <div>
      User ability: {
        can('ticket_create') ?
        <button>Create ticket</button>
        : 'Cannot create ticket'
      }
      <div className='mt-5'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio commodi dignissimos est, sed iusto dicta in. Quidem, qui? Asperiores voluptates placeat recusandae in ex numquam quisquam eum et, beatae aperiam incidunt illo. Omnis tempore saepe velit impedit, doloribus at obcaecati explicabo excepturi optio voluptates officia debitis autem neque earum consectetur corporis ad nihil voluptatem reprehenderit, dignissimos atque ab nostrum quisquam! Nemo voluptatum dignissimos, modi obcaecati, voluptates perferendis suscipit quae voluptatem veniam quasi, vero debitis tenetur molestias perspiciatis voluptas sit vitae enim deleniti neque reiciendis fugiat fuga? Dolores voluptate similique fuga libero delectus repudiandae excepturi et expedita explicabo earum a consequuntur, accusamus tempora blanditiis eum omnis unde sed aliquam, saepe recusandae? Quasi, maxime nulla consequatur quaerat nostrum asperiores nesciunt reprehenderit omnis hic delectus, odit autem aliquam aliquid consectetur doloremque praesentium libero nihil dolor dolorem possimus, aperiam neque quis exercitationem tenetur? Nemo, ut eaque omnis iure eligendi obcaecati maiores quasi aut dolorem aliquam dicta voluptatum deleniti. Sed inventore sunt facilis totam consequatur veritatis dolores possimus unde deleniti distinctio, saepe tempora, blanditiis, molestias hic quos ad repellat tenetur assumenda nemo beatae quo. Nesciunt sequi veniam totam quos nemo facere id, facilis quasi minima distinctio! Iusto ipsam exercitationem aut ut, eligendi consequatur nam dignissimos, architecto doloribus deleniti accusamus earum amet illum similique at quis, cumque consequuntur asperiores nostrum autem! Excepturi eos mollitia ut veniam qui quo reprehenderit animi consequatur debitis explicabo eligendi, placeat sit, quod minus error. Ut dicta ab voluptates illo sunt facere quas. Atque nesciunt assumenda cupiditate obcaecati inventore. Rerum sapiente amet praesentium ipsa aspernatur at fuga quae, aut sint, non dolor vitae? Aut esse assumenda nam maiores, quod ex illo sint, ipsa porro eveniet est in obcaecati distinctio modi. Voluptates ipsum est, autem fugiat aperiam maiores veritatis perferendis quibusdam quasi, ut reprehenderit ad porro, corporis ipsam? Eligendi voluptates enim voluptatem quo!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio commodi dignissimos est, sed iusto dicta in. Quidem, qui? Asperiores voluptates placeat recusandae in ex numquam quisquam eum et, beatae aperiam incidunt illo. Omnis tempore saepe velit impedit, doloribus at obcaecati explicabo excepturi optio voluptates officia debitis autem neque earum consectetur corporis ad nihil voluptatem reprehenderit, dignissimos atque ab nostrum quisquam! Nemo voluptatum dignissimos, modi obcaecati, voluptates perferendis suscipit quae voluptatem veniam quasi, vero debitis tenetur molestias perspiciatis voluptas sit vitae enim deleniti neque reiciendis fugiat fuga? Dolores voluptate similique fuga libero delectus repudiandae excepturi et expedita explicabo earum a consequuntur, accusamus tempora blanditiis eum omnis unde sed aliquam, saepe recusandae? Quasi, maxime nulla consequatur quaerat nostrum asperiores nesciunt reprehenderit omnis hic delectus, odit autem aliquam aliquid consectetur doloremque praesentium libero nihil dolor dolorem possimus, aperiam neque quis exercitationem tenetur? Nemo, ut eaque omnis iure eligendi obcaecati maiores quasi aut dolorem aliquam dicta voluptatum deleniti. Sed inventore sunt facilis totam consequatur veritatis dolores possimus unde deleniti distinctio, saepe tempora, blanditiis, molestias hic quos ad repellat tenetur assumenda nemo beatae quo. Nesciunt sequi veniam totam quos nemo facere id, facilis quasi minima distinctio! Iusto ipsam exercitationem aut ut, eligendi consequatur nam dignissimos, architecto doloribus deleniti accusamus earum amet illum similique at quis, cumque consequuntur asperiores nostrum autem! Excepturi eos mollitia ut veniam qui quo reprehenderit animi consequatur debitis explicabo eligendi, placeat sit, quod minus error. Ut dicta ab voluptates illo sunt facere quas. Atque nesciunt assumenda cupiditate obcaecati inventore. Rerum sapiente amet praesentium ipsa aspernatur at fuga quae, aut sint, non dolor vitae? Aut esse assumenda nam maiores, quod ex illo sint, ipsa porro eveniet est in obcaecati distinctio modi. Voluptates ipsum est, autem fugiat aperiam maiores veritatis perferendis quibusdam quasi, ut reprehenderit ad porro, corporis ipsam? Eligendi voluptates enim voluptatem quo!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio commodi dignissimos est, sed iusto dicta in. Quidem, qui? Asperiores voluptates placeat recusandae in ex numquam quisquam eum et, beatae aperiam incidunt illo. Omnis tempore saepe velit impedit, doloribus at obcaecati explicabo excepturi optio voluptates officia debitis autem neque earum consectetur corporis ad nihil voluptatem reprehenderit, dignissimos atque ab nostrum quisquam! Nemo voluptatum dignissimos, modi obcaecati, voluptates perferendis suscipit quae voluptatem veniam quasi, vero debitis tenetur molestias perspiciatis voluptas sit vitae enim deleniti neque reiciendis fugiat fuga? Dolores voluptate similique fuga libero delectus repudiandae excepturi et expedita explicabo earum a consequuntur, accusamus tempora blanditiis eum omnis unde sed aliquam, saepe recusandae? Quasi, maxime nulla consequatur quaerat nostrum asperiores nesciunt reprehenderit omnis hic delectus, odit autem aliquam aliquid consectetur doloremque praesentium libero nihil dolor dolorem possimus, aperiam neque quis exercitationem tenetur? Nemo, ut eaque omnis iure eligendi obcaecati maiores quasi aut dolorem aliquam dicta voluptatum deleniti. Sed inventore sunt facilis totam consequatur veritatis dolores possimus unde deleniti distinctio, saepe tempora, blanditiis, molestias hic quos ad repellat tenetur assumenda nemo beatae quo. Nesciunt sequi veniam totam quos nemo facere id, facilis quasi minima distinctio! Iusto ipsam exercitationem aut ut, eligendi consequatur nam dignissimos, architecto doloribus deleniti accusamus earum amet illum similique at quis, cumque consequuntur asperiores nostrum autem! Excepturi eos mollitia ut veniam qui quo reprehenderit animi consequatur debitis explicabo eligendi, placeat sit, quod minus error. Ut dicta ab voluptates illo sunt facere quas. Atque nesciunt assumenda cupiditate obcaecati inventore. Rerum sapiente amet praesentium ipsa aspernatur at fuga quae, aut sint, non dolor vitae? Aut esse assumenda nam maiores, quod ex illo sint, ipsa porro eveniet est in obcaecati distinctio modi. Voluptates ipsum est, autem fugiat aperiam maiores veritatis perferendis quibusdam quasi, ut reprehenderit ad porro, corporis ipsam? Eligendi voluptates enim voluptatem quo!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio commodi dignissimos est, sed iusto dicta in. Quidem, qui? Asperiores voluptates placeat recusandae in ex numquam quisquam eum et, beatae aperiam incidunt illo. Omnis tempore saepe velit impedit, doloribus at obcaecati explicabo excepturi optio voluptates officia debitis autem neque earum consectetur corporis ad nihil voluptatem reprehenderit, dignissimos atque ab nostrum quisquam! Nemo voluptatum dignissimos, modi obcaecati, voluptates perferendis suscipit quae voluptatem veniam quasi, vero debitis tenetur molestias perspiciatis voluptas sit vitae enim deleniti neque reiciendis fugiat fuga? Dolores voluptate similique fuga libero delectus repudiandae excepturi et expedita explicabo earum a consequuntur, accusamus tempora blanditiis eum omnis unde sed aliquam, saepe recusandae? Quasi, maxime nulla consequatur quaerat nostrum asperiores nesciunt reprehenderit omnis hic delectus, odit autem aliquam aliquid consectetur doloremque praesentium libero nihil dolor dolorem possimus, aperiam neque quis exercitationem tenetur? Nemo, ut eaque omnis iure eligendi obcaecati maiores quasi aut dolorem aliquam dicta voluptatum deleniti. Sed inventore sunt facilis totam consequatur veritatis dolores possimus unde deleniti distinctio, saepe tempora, blanditiis, molestias hic quos ad repellat tenetur assumenda nemo beatae quo. Nesciunt sequi veniam totam quos nemo facere id, facilis quasi minima distinctio! Iusto ipsam exercitationem aut ut, eligendi consequatur nam dignissimos, architecto doloribus deleniti accusamus earum amet illum similique at quis, cumque consequuntur asperiores nostrum autem! Excepturi eos mollitia ut veniam qui quo reprehenderit animi consequatur debitis explicabo eligendi, placeat sit, quod minus error. Ut dicta ab voluptates illo sunt facere quas. Atque nesciunt assumenda cupiditate obcaecati inventore. Rerum sapiente amet praesentium ipsa aspernatur at fuga quae, aut sint, non dolor vitae? Aut esse assumenda nam maiores, quod ex illo sint, ipsa porro eveniet est in obcaecati distinctio modi. Voluptates ipsum est, autem fugiat aperiam maiores veritatis perferendis quibusdam quasi, ut reprehenderit ad porro, corporis ipsam? Eligendi voluptates enim voluptatem quo!
      </div>
    </div>
  )
}

export default Index