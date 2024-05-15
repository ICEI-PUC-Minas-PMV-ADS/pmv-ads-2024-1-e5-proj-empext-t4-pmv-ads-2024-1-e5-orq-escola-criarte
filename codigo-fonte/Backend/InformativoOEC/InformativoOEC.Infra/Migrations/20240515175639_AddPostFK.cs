using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace InformativoOEC.Infra.Migrations
{
    /// <inheritdoc />
    public partial class AddPostFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_EventPersons_Events_EventId",
                table: "EventPersons");

            migrationBuilder.DropForeignKey(
                name: "FK_Events_Posts_PostId",
                table: "Events");

            migrationBuilder.DropIndex(
                name: "IX_Events_PostId",
                table: "Events");

            migrationBuilder.DropIndex(
                name: "IX_EventPersons_EventId",
                table: "EventPersons");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Events_PostId",
                table: "Events",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_EventPersons_EventId",
                table: "EventPersons",
                column: "EventId");

            migrationBuilder.AddForeignKey(
                name: "FK_EventPersons_Events_EventId",
                table: "EventPersons",
                column: "EventId",
                principalTable: "Events",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Posts_PostId",
                table: "Events",
                column: "PostId",
                principalTable: "Posts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
