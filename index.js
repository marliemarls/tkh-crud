const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function main() {
    await prisma.post.update({
      where: {
        slug: 'my-first-post',
      },
      data: {
        comments: {
          createMany: {
            data: [
              { comment: 'Great post!' },
              { comment: "Can't wait to read more!" },
            ],
          },
        },
      },
    })
    const posts = await prisma.post.findMany({
      include: {
        comments: true,
      },
    })
  
    console.dir(posts, { depth: Infinity })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })