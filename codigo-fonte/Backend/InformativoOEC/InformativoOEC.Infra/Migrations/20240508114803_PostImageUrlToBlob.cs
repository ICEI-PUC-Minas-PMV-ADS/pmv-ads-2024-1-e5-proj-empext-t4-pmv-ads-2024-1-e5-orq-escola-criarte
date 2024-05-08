using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InformativoOEC.Infra.Migrations
{
    /// <inheritdoc />
    public partial class PostImageUrlToBlob : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "ImageURL",
                table: "Posts",
                type: "mediumblob",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .OldAnnotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ImageURL",
                table: "Posts",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "mediumblob")
                .Annotation("MySql:CharSet", "utf8mb4");
        }
    }
}
