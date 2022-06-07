-- CreateTable
CREATE TABLE "List" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false
);
