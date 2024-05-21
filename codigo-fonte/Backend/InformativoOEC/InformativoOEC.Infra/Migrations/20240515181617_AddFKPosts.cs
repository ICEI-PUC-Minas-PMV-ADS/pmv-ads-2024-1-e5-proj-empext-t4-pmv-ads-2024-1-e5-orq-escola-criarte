using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InformativoOEC.Infra.Migrations
{
    /// <inheritdoc />
    public partial class AddFKPosts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Events_PostId",
                table: "Events",
                column: "PostId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Posts_PostId",
                table: "Events",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Posts_PostId",
                table: "Events");

            migrationBuilder.DropIndex(
                name: "IX_Events_PostId",
                table: "Events");
        }
    }
}
